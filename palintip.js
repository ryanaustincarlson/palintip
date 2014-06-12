
function dollar_string(num)
{
	var s = num.toString();
	var decimal_idx = s.indexOf('.');
	if (decimal_idx > 0)
	{
		var num_decimals = s.substr(decimal_idx+1,s.length).length;

		if (num_decimals == 1)
		{
			s += '0';
		}
		else if (num_decimals > 2)
		{
			s = s.substr(0,decimal_idx+3);
		}
	}
	else
	{
		s += '.00';
	}

	return s;
}

function is_palindrome(num)
{
	var s = dollar_string(num).replace('.','');
	return s == s.split('').reverse().join('');
}

function calculate_tip_percent(total, original)
{
	total = parseFloat(total);
	original = parseFloat(original);
	var amt = (1. * total / original) - 1; 
	return dollar_string(amt * 100.);
}

function calculate_tip_dollar(total, original)
{
	total = parseFloat(total);
	original = parseFloat(original);
	return dollar_string(total - original);
}

function find_palintip(amount, target_tip_percent)
{
	var total = amount * (1 + target_tip_percent / 100.);

	var lower = total;
	var upper = total;
	while (!is_palindrome(lower))
	{
		lower -= .01;
	}

	while (!is_palindrome(upper))
	{
		upper += .01;
	}

	lower = dollar_string(lower)
	upper = dollar_string(upper)

	if (lower == upper)
	{
		return [lower];
	}

	return [lower, upper];
}

var bill = 54;
var tip = 20;

var totals = find_tipindrome(bill, tip);

for (var i=0; i<totals.length; i++)
{
	var total = totals[i];
	console.log("total: " + total + 
		", tip $: " + calculate_tip_dollar(total, bill) + 
		", tip %: " + calculate_tip_percent(total, bill));
}
