#!/usr/bin/perl
use strict;
use warnings;
use JSON;
use Time::HiRes qw(gettimeofday);

my $isis_regex = qr/^(L[12])\s+([a-zA-Z0-9_-]+)\s+(ge-[0-9\/]+)\s+(Up|Down|Init)\s+(\d+)/;

# State Machine Storage
my %network_state = ();
my $FLAP_THRESHOLD = 2.0; # Seconds to consider a link "flapping"

sub parse_log_stream {
    my ($line) = @_;
    chomp $line;

    # Regex Extraction Logic
    if ($line =~ $isis_regex) {
        my ($level, $neighbor_id, $interface, $status, $metric) = ($1, $2, $3, $4, $5);
        
        # Create a unique key for the link
        my $link_key = "$neighbor_id|$interface";

        # State Machine: Check for Flapping Links
        if (exists $network_state{$link_key}) {
            my $last_update = $network_state{$link_key}->{'timestamp'};
            my $current_time = gettimeofday();
            my $last_status = $network_state{$link_key}->{'status'};

            # If status changed too quickly, flag as 'FLAPPING' and suppress alert
            if ($status ne $last_status && ($current_time - $last_update) < $FLAP_THRESHOLD) {
                $network_state{$link_key}->{'condition'} = 'CRITICAL_FLAP';
                return; # Suppress noise
            }
        }

        # Update State
        $network_state{$link_key} = {
            neighbor    => $neighbor_id,
            interface   => $interface,
            status      => $status,
            metric      => int($metric),
            timestamp   => gettimeofday(),
            condition   => 'STABLE',
            topology_l  => $level
        };
    }
}

sub export_topology {
    my $json = JSON->new->allow_nonref;
    
    # Convert Hash to Array for D3.js / React Flow
    my @nodes_and_links = values %network_state;
    
    print $json->encode(\@nodes_and_links);
}

# Simulation: Reading from STDIN (piped from SSH or zstdcat)
while (<STDIN>) {
    parse_log_stream($_);
}

export_topology();#!/usr/bin/perl
use strict;
use warnings;
use JSON;
use Time::HiRes qw(gettimeofday);

# Regex to capture ISIS Neighbor details (SystemID, Interface, State, Metric)
# Example Log: "L2  N1_Router  ge-1/0/0  Up  30  ..."
my $isis_regex = qr/^(L[12])\s+([a-zA-Z0-9_-]+)\s+(ge-[0-9\/]+)\s+(Up|Down|Init)\s+(\d+)/;

# State Machine Storage
my %network_state = ();
my $FLAP_THRESHOLD = 2.0; # Seconds to consider a link "flapping"

sub parse_log_stream {
    my ($line) = @_;
    chomp $line;

    # Regex Extraction Logic
    if ($line =~ $isis_regex) {
        my ($level, $neighbor_id, $interface, $status, $metric) = ($1, $2, $3, $4, $5);
        
        # Create a unique key for the link
        my $link_key = "$neighbor_id|$interface";

        # State Machine: Check for Flapping Links
        if (exists $network_state{$link_key}) {
            my $last_update = $network_state{$link_key}->{'timestamp'};
            my $current_time = gettimeofday();
            my $last_status = $network_state{$link_key}->{'status'};

            # If status changed too quickly, flag as 'FLAPPING' and suppress alert
            if ($status ne $last_status && ($current_time - $last_update) < $FLAP_THRESHOLD) {
                $network_state{$link_key}->{'condition'} = 'CRITICAL_FLAP';
                return; # Suppress noise
            }
        }

        # Update State
        $network_state{$link_key} = {
            neighbor    => $neighbor_id,
            interface   => $interface,
            status      => $status,
            metric      => int($metric),
            timestamp   => gettimeofday(),
            condition   => 'STABLE',
            topology_l  => $level
        };
    }
}

sub export_topology {
    my $json = JSON->new->allow_nonref;
    
    # Convert Hash to Array for D3.js / React Flow
    my @nodes_and_links = values %network_state;
    
    print $json->encode(\@nodes_and_links);
}

# Simulation: Reading from STDIN (piped from SSH or zstdcat)
while (<STDIN>) {
    parse_log_stream($_);
}

export_topology();
