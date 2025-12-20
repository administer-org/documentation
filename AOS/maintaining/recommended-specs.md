# Recommended Specifications

AOS is a lightweight Python program, so it does not take very much to run. As of AOS 5.4.1, most of our instances operate within the realm of 50-60mb memory and 200-350mb disk space. 

Because of that, we recommend the following to be reserved for **just AOS and a lightweight operating system (arch)** in applications such as Proxmox LXC containers:

| Resource    | Recommended | Minimum | Notes                                                                                                |
|-------------|-------------|---------|------------------------------------------------------------------------------------------------------|
| CPU Threads | 2           | 1       | This will greatly depend on your expected traffic. If your AOS is clustered, you won't need as much. |
| Memory      | 1GB         | 512MB   | Depends on your host OS, AOS Plugins, and server lifespan                                            |
| Disk space  | 6GB         | 4GB     | Depends on your host & log retention. AOS will not use over 512mb by itself.                         |
| Network     | 100MB/s     | N/A     | All official AOS nodes have gigabit uplinks. Try not to throttle machines if possible.               |


Please note that you may need to increase resource availability during the install process to ensure uv can write packages in a timely manner.

These are just base recommendations and are not all-encompassing, your needs will strongly vary (hosting mongo? heavy OS (ubuntu)? LXC, qemu, or bare metal? shared machine?). On `us-1`, AOS along with Arch Linux is operating with 200MB of memory and in 3GB of disk space roughly. These recommendations are just general safe assumptions based on our experience with 5 nodes.

At the moment, Docker is not supported out of the box, however, that does not mean you are unable to run it in a generic Python container. We are looking into docker support for the long term, but for now we are continuing to support systemd-based installs.
