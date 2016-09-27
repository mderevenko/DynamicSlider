<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="DynamicSlider.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dynamic Slider</title>
    <link rel="stylesheet" href="jquery-ui/jquery-ui.css">
    <link rel="stylesheet" href="jquery-ui/jquery-ui.theme.min.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <script src="scripts/mainScript.js"></script>

</head>
<body>
    
    <div><h1>Slider that is alive!</h1> <p>(i.e., changing its value on its own)</p></div>
    <div id="slider" runat="server"></div>

</body>
</html>
