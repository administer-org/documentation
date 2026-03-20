# ParseCommand

Helper module for parsing cli-style commands (`command --flag -option1 value) into a table.

**Usage**: 

```luau
local String = "ban -user pyxfluff --noappeal"
local Parsed = ParseCommand(string)

print(Parsed) --// -> { Command = "ban", Flags = { user = pyxfluff, noappeal = true } }
