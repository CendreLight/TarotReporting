//Generic method to show a screen
function showScreen(id, title, screen)
{
	showLoader();

	initScreen();

	setTitle(title);

	$(".wrapper").html("");

	$(".wrapper").attr("id", id);

	screen();
}

//Screen for players selection
function screenPlayers()
{
	showScreen("players_choice", "Choix des joueurs", function()
	{
		nbPlayers = 0;

		playersList = [];

		delete teamId;

		showNext("Comptage", function()
		{
			console.log("Go vers le comptage !!!");
		});

		$.ajax(
		{
			url: serverUrl + "queries.php",
			type: "POST",
			cache: false,
			data:
			{
				func: "get_user"
			}
		}).done(function(data)
		{
			var users = eval(data);

			var slide = $("<div></div>").attr("id", "users_slide");

			var currentDiv = $("<div></div>");

			for(var user in users)
			{
				if(user % 6 == 0 && user != 0)
				{
					slide.append(currentDiv);

					currentDiv = $("<div></div>");
				}
				
				currentDiv.append(userSwitch(users[user]));
			}

			slide.append(currentDiv);

			$(".wrapper").append(slide);

			$("#users_slide").slick(
			{
				dots: true,
				infinite: false
			});

			addUserClickAction();

			var usersChoiceButtons = $("<div></div>").attr("id", "users_choice_buttons");

			var ajouterButton = button("").addClass("invisible");

			var commencerButton = button("Commencer").attr("id", "commencer").addClass("disable");

			usersChoiceButtons.append($("<div></div>").append(ajouterButton));

			usersChoiceButtons.append($("<div></div>").append(commencerButton));

			$(".wrapper").append(usersChoiceButtons);

			hideLoader();
		});
	});
}

//Enable click on an user button
function addUserClickAction()
{
	$(".user").off("click");

	$(".user").click(function(e)
	{
		if(nbPlayers < 5 || $(this).hasClass("active"))
		{
			if($(this).hasClass("active"))
			{
				delete playersList[parseInt($(this).attr("user_id"))];
			} else
			{
				playersList[parseInt($(this).attr("user_id"))] = $(this).find("span").text();
			}

			$(this).toggleClass("active");

			nbPlayers = $(".user.active").size();

			if(nbPlayers > 2)
			{
				$("#commencer").removeClass("disable");
				$("#commencer").addClass("enable");

				$("#commencer").off("click");
				$("#commencer").on("click", function(e)
				{
					$.ajax(
					{
						url: serverUrl + "queries.php",
						type: "POST",
						cache: false,
						data:
						{
							func: "find_team",
							players: playersList,
							count: nbPlayers
						}
					}).done(function(data)
					{
						teamId = data;

						screenReportingHome();
					});
				});
			} else
			{
				$("#commencer").addClass("disable");
				$("#commencer").removeClass("enable");
				$("#commencer").off("click");
			}
		}
	});
}

//Home screen of app
function screenReportingHome()
{
	showScreen("home", "Accueil", function()
	{
		showPrev("Choix des joueurs", function()
		{
			screenPlayers();
		});

		$(".wrapper").text("A toi de jouer Erwan ;)");

		hideLoader();
	});
}