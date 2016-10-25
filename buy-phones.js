'use strict';

function totalPrice() {
	var threshold = 25;
	var accessoryPrice = 7;
	var phonePrice = 32;
	var account = 150;
	var phonesPurchased = 0;
	var accessoryPurchased = 0;
	var addedBill = 0;
	

	var tax = function(addedBill) {
		return addedBill + addedBill * .09;
	}

	while ( account >= (tax(phonePrice) + threshold )) {
		phonesPurchased ++;
		addedBill += tax(phonePrice);
		account -= tax(phonePrice); 
	}

	var totalPhonePrice =  phonesPurchased * phonePrice;
	console.log(phonesPurchased + " phones " + priceInDollars(totalPhonePrice));

	while ( account >= (tax(accessoryPrice) + threshold )) {
		accessoryPurchased ++;
		addedBill += tax(accessoryPrice);
		account -= tax(accessoryPrice);
	}
	function totalAccessoryPrice() {
		var totalAccessory = accessoryPurchased * accessoryPrice;
		return tax(totalAccessory);
	} 
	console.log(accessoryPurchased + " accessory " + priceInDollars(totalAccessoryPrice()));

	function priceInDollars(number) {
		return "$" + number.toFixed(2);
	}

	console.log('Money left in account: ' + priceInDollars(account))
	return priceInDollars(addedBill);
}

console.log('Total money spent: ' + totalPrice());


