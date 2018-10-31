// Require the dependencies
const express = require("express");
const burgers = require("../models/burgers.js");

burgers.select();
burgers.insert();
burgers.update();
