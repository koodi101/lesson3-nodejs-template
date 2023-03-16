# Koodi101 server provisioning

This directory contains Ansible provisioning scripts for use by the teachers.

## Requirements

- SSH
- Ansible
- Python

## Quick start

You need an SSH key which is authorized to log in to the hosts as root. Add this SSH key to your [SSH agent](https://en.wikipedia.org/wiki/Ssh-agent):

```console
ssh-add ./path/to/id_rsa_koodi101
```

Test your connection with `ssh root@<IP>`, replacing `<IP>` with an IP address of one of the servers. SSH should not ask for a password if everything worked correctly.

Now to provision the hosts, run

```console
ansible-playbook -v playbook.yml
```

> If you want to limit to a specific host from the `hosts.yml` file, use `ansible-playbook -v playbook.yml --limit localhost,<HOSTNAME>`, with a `HOSTNAME` from `hosts.yml`. Limiting to groups also works the same way.

## Hosts

The hosts which will be provisioned can be found at `inventory/hosts.yml`.

## SSH keys

The playbook generates unique SSH keypairs for each host in the `ssh_keys` directory. Distribute the keys securely to the groups.

Logging in to the hosts using the SSH key can be done with the following command:

```console
ssh koodi101@<IP> -i ./path/to/id_rsa_koodi101_<HOSTNAME>
```

Finally, you should be able to run `sudo su` as the `koodi101` user and get a root shell.
