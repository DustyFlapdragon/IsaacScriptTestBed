--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]

local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file)
    if ____moduleCache[file] then
        return ____moduleCache[file]
    end
    if ____modules[file] then
        ____moduleCache[file] = ____modules[file]()
        return ____moduleCache[file]
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["tests.modConfigMenu"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local categoryName, boolStatus, deleteOldConfig
function boolStatus(self, value)
    return (value and "On") or "Off"
end
function deleteOldConfig(self)
    local categoryID = ModConfigMenu:GetCategoryIDByName(categoryName)
    if categoryID ~= nil then
        ModConfigMenu.MenuData[categoryID] = {Name = categoryName, Subcategories = {}}
    end
end
categoryName = "IsaacScript Test Bed"
local blank = "Blank Menu"
local subcategoryName = "Info"
local addSettingOption = false
function ____exports.main(self)
    if ModConfigMenu == nil then
        return
    end
    deleteOldConfig(nil)
    ModConfigMenu.AddSetting(
        categoryName,
        subcategoryName,
        {
            Type = 4,
            CurrentSetting = function() return addSettingOption end,
            Display = function() return "Test Setting:" .. boolStatus(nil, addSettingOption) end,
            OnChange = function(newValue)
                addSettingOption = newValue
            end,
            Info = {"Some Descriptive text"}
        }
    )
    ModConfigMenu.AddSetting(categoryName, "test")
end
return ____exports
 end,
["main"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local modConfigMenu = require("tests.modConfigMenu")
local IsaacScriptTestBed = RegisterMod("IsaacScriptTestBed", 1)
modConfigMenu:main()
Isaac.DebugString("IsaacScriptTestBed initialized.")
return ____exports
 end,
["interfaces.ModConfigMenu"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
 end,
}
return require("main")
