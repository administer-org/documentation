# Recommended Specifications

AOS is a lightweight Python program, so it does not take very much to run. As of AOS 5.3.1, most of our instances operate within the realm of 50-60mb memory and 200-350mb disk space.

Because of that, we recommend the following to be reserved for **just AOS and a lightweight operating system (arch)** in applications such as Proxmox LXC containers:

| Resource    | Recommended | Minimum | Notes                                                                                                |
|-------------|-------------|---------|------------------------------------------------------------------------------------------------------|
| CPU Threads | 2           | 1       | This will greatly depend on your expected traffic. If your AOS is clustered, you won't need as much. |
| Memory      | 1GB         | 512MB   | Depends on your host OS, AOS Plugins, and server lifespan                                            |
| Disk space  | 4GB         | 2GB     | Depends on your host & log retention. AOS will not use over 512mb by itself.                         |
| Network     | 100MB/s     | N/A     | All official AOS nodes have gigabit uplinks. Try not to throttle machines if possible.               |


Please note that you may need to increase resource availability during the install process to ensure uv can write packages in a timely manner.

These recommendations will change if you are using a shared machine or a heavier OS (ubuntu).
