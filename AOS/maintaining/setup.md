# AOS Setup

Setting an AOS Server up is simple! Just follow a quick few steps and you'll be ready for production

## Prerequisites

- Python 3.12 or newer
- Pip (required by the installer)
- MongoDB (8.0.x recommended)
- Linux (arch, debian, or fedora if you want to suffer)
  - Using systems such as Windows and macOS is possible but we do not offer support or automated setup for them. However, the steps should generally be the same. For more information, see the bottom of this page.

## Getting started

### Python

Python is required for AOS because it's what our tech stack runs off. You do not need any other packages other than pip, the installer will install `uv` for you. The `pyproject` requires Python 3.12<= because of technicalities related to F strings.

### MongoDB

You can find the MongoDB 8 install guide here: https://www.mongodb.com/docs/manual/installation/

For production, we recommend adding a user to your database and making note of the key for setting up your `._config.json` file later. **ENSURE MONGO IS FIREWALLED AND CANNOT BE REACHED OUTSIDE OF YOUR LAN!!** If you don't you are asking for exploits and ransom!


## Install

1. Clone the repository:
```sh
git clone https://github.com/administer-org/app-server
cd app-server
```

2. Verify prerequisites:

```sh
python3 --version # -> Python 3.13.3
python3 -m pip --version # -> pip 25.1.1 from /usr/lib/python3.13/site-packages/pip (python 3.13)
mongosh # -> Should connect to 127.0.0.1:27017, if hosting elsewhere use `mongosh HOST`
```

## Standard Linux install

Just run the AOS Installer:

```sh
chmod +x Install_AOS.sh
./Install_AOS.sh
```

And then you're done! Follow the steps in the installer.

## Windows, macOS, Manual/developer install (unsupported installation)

::: warning OS Compatibility
macOS and Windows are not QA tested because we do not develop with either in mind. All official AOS instances use some flavor of Linux, generally Arch.

Commands will generally differ based on what operating system you are using.
:::

The steps will differ a little bit but generally they should follow these steps:

1. Install uv:
```sh
python3 -m pip install uv
```
2. Initialize a venv and install packages:
```sh
uv venv
source .venv/bin/activate # This will depend on your OS
uv pip install .
```
3. Copy and edit config files
```sh
# You can do this in your editor of choice, commands here are just nano for simplicity
cp ._config.json.templ ._config.json
nano ._config.json
nano ._aos.json # Optionally, you can edit your default host, port, and uvicorn workers here
```
4. Test database connection and generate keys
```sh
python3 -m AOS database genkeys
```
5. Initialize logging
```sh
# This will work on macOS (& linux obviously) but not Windows.
sudo mkdir /etc/adm
sudo touch /etc/adm/log
sudo chmod 7777 /etc/adm /etc/adm/log
```
6. Done! You can now run AOS:
```sh
python3 -m AOS
python3 -m AOS core serve
```

Post-install, you may want to make sure AOS is working (`localhost:8020` by default), or check the log using `tail -f` (edited in ._config.json but `/etc/adm/log` by default.)

If you are looking for AOS to start on boot, you will need to use your OS' scheduler (Task Scheduler on Windows, systemd on Linux, launchd on macOS). 

This guide is up to date as of AOS 5.4.1. You can find the setup script [here](https://github.com/administer-org/app-server/blob/main/Install_AOS.sh), which will have up to date instructions if this is old.


## Upgrading AOS Post-install

Eventually, we will have a script to do it. However, you can simply do this in the meantime.

```sh
git pull
sudo systemctl restart adm
```
