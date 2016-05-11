"use strict";

var $ = require("jquery");

var BattleDome = {};

BattleDome.RobotType = function () {
	this.name = "Mr Roboto";
	this.health = 0;
	this.weapon = null;
	this.modification = null;

	this.toString = function () {
		return this.name;
	};
};

BattleDome.SpaceBot = function(){
	this.health = ;
	this.weapon = ;
	this.modification = ;
	this.robotType = "SpaceBot";
};
BattleDome.SpaceBot.prototype = new BattleDome.RobotType();

BattleDome.Starman = function(){
	this.name = "Starman";
	this.health= ;
}
BattleDome.Starman.prototype = new BattleDome.SpaceBot();

BattleDome.AtomicPowerRobot = function(){
	this.name = "AtomicPowerRobot";
	this.health= ;
}
BattleDome.AtomicPowerRobot.prototype = new BattleDome.SpaceBot();

BattleDome.DefectiveRobot = function(){
	this.health = ;
	this.weapon = ;
	this.modification = ;
	this.robotType = "Defective";
};
BattleDome.DefectiveRobot.prototype = new BattleDome.RobotType();

BattleDome.Marvin = function(){
	this.name = Marvin;
	this.health = ;
};
BattleDome.Marvin.prototype = new BattleDome.DefectiveRobot();

BattleDome.Gir = function(){
	this.name = "Gir";
	this.health = ;
}
BattleDome.Gir.prototype = new BattleDome.DefectiveRobot();

BattleDome.GenericRobot = function(){
	this.health = ;
	this.weapon = ;
	this.modification = ;
	this.robotType = "GenericRobot";
}
BattleDome.GenericRobot.prototype = new BattleDome.RobotType();

BattleDome.Punchy = function(){
	this.name = "Punchy";
	this.health = ;
}
BattleDome.Punchy.prototype = new BattleDome.GenericRobot();

BattleDome.Gunner = function(){
	this.name = "Gunner";
	this.health = ;
}
BattleDome.Gunner.prototype = new BattleDome.GenericRobot();