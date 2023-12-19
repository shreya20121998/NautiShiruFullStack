//Release Strategy master data for Voyage Release
namespace release_strategy_voyage;
//Release Strategy master table for Voyage Release
entity ZVOY_REL{ 
RELS :String(10);//Release Strategy  Code
VOYTY :String(4);//Voyage Type 
VESTY :String(4);//Vessel Type 
key ZGROUP :String(12)@assert.unique @mandatory @assert.notNull;//User ID group 
APP1 :String(12)@assert.unique @mandatory @assert.notNull;//Username 
}