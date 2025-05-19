# AOS Setup

Setting an AOS Server up is simple! Just follow a quick few steps and you'll be ready for production

## Prerequisites

- Python 3.12 or 3.13
- Pip (required by the installer)
- MongoDB (8.0.x recommended)
- Linux (arch, debian, or fedora if you want to suffer)

## Getting started

### Python

Python is required for AOS because it's what our tech stack runs off. You do not need any other packages, the installer will install `uv` for you.

### MongoDB

You can find the MongoDB 8 install guide here: https://www.mongodb.com/docs/manual/installation/

Ensure authentication is disabled and there are no users. At the moment, AOS does not support Mongo authentication. **ENSURE MONGO IS FIREWALLED AND CANNOT BE REACHED OUTSIDE OF YOUR LAN!!** If you don't you are asking for explots!


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
mongosh # -> Should connect to 127.0.0.1:27017 and not ask for a login
```


## Linux

Just run the AOS Installer:

```sh
chmod +x Install_AOS.sh
./Install_AOS.sh
```

And then you're done! Follow the installers steps.

## Windows/macOS

::: warning
macOS and Windows are not QA tested because we do not develop with either in mind. All official AOS instances use some flavor of Linux.
:::

The steps will differ a little bit but generaly they should folow these steps:

1. Install uv:
```sh
py -m pip install uv
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
nano ._aos.json # Edit your default host, port, and uvicorn workers here
```
4. Done! You can now run AOS:
```sh
py -m AOS
py -m AOS core serve
```
