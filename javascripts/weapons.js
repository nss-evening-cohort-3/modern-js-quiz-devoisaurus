"use strict";

var $ = require("jquery");

var Weapons = {};

Weapons.Weapon = function () {
	this.name = "weapon slot";
	this.damage = 0;

	this.toString = function() {
		return this.name;
	};
};



Weapons.ParticleBeam = function() {
	this.name = "particle beam";
	this.damage = ;
};
Weapons.ParticleBeam.prototype = new Weapons.Weapon();

Weapons.BlastCannon = function() {
	this.name = "blast cannon";
	this.damage = ;
};
Weapons.BlastCannon.prototype = new Weapons.Weapon();

Weapons.Laser = function() {
	this.name = "laser";
	this.damage = ;
};
Weapons.Laser.prototype = new Weapons.Weapon();

Weapons.Shredder = function() {
	this.name = "shredder";
	this.damage = ;
};
Weapons.Shredder.prototype = new Weapons.Weapon();
