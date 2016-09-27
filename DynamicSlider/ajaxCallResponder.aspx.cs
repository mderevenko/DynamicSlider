using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DynamicSlider
{
    public partial class ajaxCallResponder : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Random rand = new Random();
            string sliderValue = rand.Next(100).ToString();

            Response.Clear();
            Response.Write(sliderValue);
            Response.End();
        }
    }
}