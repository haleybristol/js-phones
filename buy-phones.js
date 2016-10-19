'use strict';

var accessory = 7;
var taxRate = .8;
var phonePrice = 32;
var account = 150;
var phonesPurchased = 0;
var accessoryPurchased = 0;
var total = 0;

var totalPrice = function( total, phonePrice, accessory, account ) {

	var tax = function(total) {
		var taxRate = .08;
		var totalWithTax = total + total * taxRate;
		return totalWithTax;
		console.log(totalWithTax);
	}

	while ( account >= tax(phonePrice) ) {
		phonesPurchased ++;
		total += tax(phonePrice);
		account -= tax(phonePrice); 
	}

	while ( account >= tax(accessory) ) {
		accessoryPurchased ++;
		total += tax(accessory);
		account -= tax(accessory);
	}

	var priceInDollars = function(total) {
		var dollars = "$" + total.toFixed(2);
		return dollars;
	}

	console.log(total);
	return priceInDollars(total);
}
	console.log(totalPrice(total, phonePrice, accessory, account));

