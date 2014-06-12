
function dollarString(num)
{
	var s = num.toString();
	var decimalIdx = s.indexOf('.');
	if (decimalIdx > 0)
	{
		var numDecimals = s.substr(decimalIdx+1,s.length).length;

		if (numDecimals == 1)
		{
			s += '0';
		}
		else if (numDecimals > 2)
		{
			s = s.substr(0,decimalIdx+3);
		}
	}
	else
	{
		s += '.00';
	}

	return s;
}

function isPalindrome(num)
{
	var s = dollarString(num).replace('.','');
	return s == s.split('').reverse().join('');
}

function calculateTipPercent(total, original)
{
	total = parseFloat(total);
	original = parseFloat(original);
	var amt = (1. * total / original) - 1; 
	return dollarString(amt * 100.);
}

function calculateTipDollar(total, original)
{
	total = parseFloat(total);
	original = parseFloat(original);
	return dollarString(total - original);
}

function findPalintip(amount, targetTipPercent)
{
	var total = amount * (1 + targetTipPercent / 100.);

	var lower = total;
	var upper = total;
	while (!isPalindrome(lower))
	{
		lower -= .01;
	}

	while (!isPalindrome(upper))
	{
		upper += .01;
	}

	lower = dollarString(lower)
	upper = dollarString(upper)

	if (lower == upper)
	{
		return [lower];
	}

	return [lower, upper];
}

// var bill = 54;
// var tip = 20;

// var totals = find_tipindrome(bill, tip);

// for (var i=0; i<totals.length; i++)
// {
// 	var total = totals[i];
// 	console.log("total: " + total + 
// 		", tip $: " + calculate_tip_dollar(total, bill) + 
// 		", tip %: " + calculate_tip_percent(total, bill));
// }
