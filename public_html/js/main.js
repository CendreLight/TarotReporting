$(function()
{
	showLoader();

	getAllTemplate();

	if(teamId)
	{
		screenReportingHome();
	} else
	{
		screenPlayers();
	}
});

//Extract all html template from index
function getAllTemplate()
{
	buttonTemplate = $($("#button_template").html());
	$("#button_template").remove();

	switchTemplate = $($("#switch_template").html());
	$("#switch_template").remove();
	alert(switchTemplate);
}

//Create a new button with specific text
function button(text)
{
	var returnedObject = buttonTemplate.clone();

	returnedObject.find("span").text(text);
	
	return returnedObject;
}

//Create a new switch button with specific text
function switchButton(text)
{
	var returnedObject = switchTemplate.clone();

	returnedObject.find("span").text(text);

	return returnedObject;
}

//Create a user switch (the user_id attribute is added)
function userSwitch(user)
{
	return switchButton(user.name).attr("user_id", user.id).addClass("user");
}

//Set the title of the page
function setTitle(title)
{
	$("header>span").text(title);
}

//Show the previous button with specific text and action
function showPrev(text, action)
{
	if(text)
	{
		$("#prev>span").text(text);
	}

	$("#prev").show();

	if(action)
	{
		$("#prev").click(function(e)
		{
			if(action)
			{
				action();
			}
		});	
	}
}

//Hide and disable the previous button
function hidePrev()
{
	$("#prev").hide();
	$("#prev>span").text("");

	$("#prev").off("click");
}

//Show the next button with specific text and action
function showNext(text, action)
{
	if(text)
	{
		$("#next>span").text(text);
	}

	$("#next").show();

	if(action)
	{
		$("#next").click(function(e)
		{
			if(action)
			{
				action();
			}
		});	
	}
}

//Hide and disable the next button
function hideNext()
{
	$("#next").hide();
	$("#next>span").text("");

	$("#next").off("click");
}

//Show the loader screen
function showLoader()
{
	$("#loader").fadeIn(animTime);
}

//Hide the loader screen
function hideLoader()
{
	$("#loader").fadeOut(animTime);
}

//Initialize (set to zero) the wrapper for the next screen
function initScreen()
{
	hideNext();
	hidePrev();
	setTitle("");
}