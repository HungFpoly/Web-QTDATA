const express = require("express");
const expressHbs = require("express-handlebars");

var app = express();
app.listen(2020);
app.use(express.static("css"));
app.use(express.static("js"));
app.use(express.static("images"));

app.engine(".hbs", expressHbs());
app.set("view engine", ".hbs");

//Trường
app.get("/account", function (req, res) {
  res.render("Account", {
    myCSS: "account.css",
    cssTV:
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">',
    jsTV:
      '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>',
    jsTV3:
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>',
  });
});
app.get("/fogot-password", function (req, res) {
  res.render("FogotPassword", {
    myCSS: "fogot.css",
    cssTV:
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">',
    jsTV:
      '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>',
    jsTV3:
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>',
  });
});
//Nhàn
app.get("/qt-community", function (req, res) {
  res.render("QT-Community", {
    myCSS: "community.css",
    cssTV:
      '<link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css"/>',
    myJS: "validate-form.js",
    jsTV:
      '<link rel="stylesheet"  href= "https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"/>',
  });
});
//Tính
app.get("/solutions", function (req, res) {
  res.render("Solutions", {
    myCSS: "Solution_css.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      ' <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>',
  });
});
app.get("/qt-cores", function (req, res) {
  res.render("QT-Cores", {
    myCSS: "QT-Cores_css.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>',
  });
});
app.get("/hospitality", function (req, res) {
  res.render("Hospitality", {
    myCSS: "Hospitality_css.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      ' <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>',
  });
});
app.get("/trading-system", function (req, res) {
  res.render("Trading-system", {
    myCSS: "Trading_System_css.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      ' <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>',
  });
});
//Quân
app.get("/consumer-lending-mortgage", function (req, res) {
  res.render("Consumer-lending-mortgage", {
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
  });
});
app.get("/qt-ai-qt-invest", function (req, res) {
  res.render("QT-AI-QT-Invest", {
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    jsTV:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
  });
});
app.get("/sale-ota", function (req, res) {
  res.render("Sale-ota", {
    cssTV:
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />',
    cssTV2:
      "<link rel='stylesheet' id='main_style-css' href='https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/themes/converio/style.css?time=1600898021' type='text/css' media='all' />",
    cssTV3:
      "<link rel='stylesheet' id='color-schemes-css' href='https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/themes/converio/styles/colors/orange.css?time=1600898021' type='text/css' media='all' />",
    cssTV4: '<link rel="pingback" href="https://qntdata.com/xmlrpc.php">',
    jsTV:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>',
    jsTV2:
      '<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>',
    jsTV3:
      "<script type='text/javascript' src='https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-includes/js/jquery/jquery.js?time=1600898021' id='jquery-core-js'></script>",
  });
});
//Sơn
app.get("/qt-blog", function (req, res) {
  res.render("QT-Blog", {
    myCSS: "home_blog.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">',
  });
});
app.get("/tri-tue", function (req, res) {
  res.render("Blog-Tri-tue", {
    myCSS: "tri_tue.css",
    cssTV:
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">',
  });
});
//Thắng
app.get("/company", function (req, res) {
  res.render("qt-blog", {
    myCSS: " ",
    cssTV: " ",
    cssTV2: " ",
    cssTV3: " ",
    cssTV4: " ",
    myJS: " ",
    jsTV: " ",
    jsTV2: " ",
    jsTV3: " ",
    jsTV4: " ",
  });
});
app.get("/team", function (req, res) {
  res.render("qt-blog", {
    myCSS: " ",
    cssTV: " ",
    cssTV2: " ",
    cssTV3: " ",
    cssTV4: " ",
    myJS: " ",
    jsTV: " ",
    jsTV2: " ",
    jsTV3: " ",
    jsTV4: " ",
  });
});
app.get("/carerrs-opportunity", function (req, res) {
  res.render("qt-blog", {
    myCSS: " ",
    cssTV: " ",
    cssTV2: " ",
    cssTV3: " ",
    cssTV4: " ",
    myJS: " ",
    jsTV: " ",
    jsTV2: " ",
    jsTV3: " ",
    jsTV4: " ",
  });
});
app.get("/partnerships", function (req, res) {
  res.render("qt-blog", {
    myCSS: " ",
    cssTV: " ",
    cssTV2: " ",
    cssTV3: " ",
    cssTV4: " ",
    myJS: " ",
    jsTV: " ",
    jsTV2: " ",
    jsTV3: " ",
    jsTV4: " ",
  });
});
//Phúc
app.get("/qt-forum", function (req, res) {
  res.render("QT-Forum", {
    myCSS: "qt-forum.css",
    cssTV:
      ' <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">',
    jsTV:
      '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>',
    jsTV2:
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>',
    jsTV3:
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>',
  });
});
