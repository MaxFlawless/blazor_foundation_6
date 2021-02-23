using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_Foundation_6.Plugins.CSS
{
    public interface IStyleManagement
    {
        public void Set(string key, string value);
        public void SetFromJson(JObject json);
        public string Get(string key);
    }
    public class BFStyleManagement: IStyleManagement
    {
        protected JObject Style { get; set; } = new JObject();
        public BFStyleManagement()
        {
            Set("PrimaryColor", "#DF682D");
            Set("PrimaryColorDisabled", "#DF682D");
            Set("SecondaryColor", "#e9e9e9");
            Set("SecondaryColorDisabled", "#e9e9e9");
            Set("AlertColor", "#c60f13");
            Set("AlertColorDisabled", "#c60f13");
            Set("SuccessColor", "#5da423");
            Set("SuccessColorDisabled", "#5da423");
            Set("WarningColor", "#ffae00");
            Set("WarningColorDisabled", "#ffae00");
            Set("BodyFontColor", "#000000");
            Set("BodyColor", "#ffffff");
            Set("HeaderFontColor", "#222222");
            Set("HeaderColor", "#222222");
            Set("TopBarFontColor", "#ffffff");
            Set("TopBarColor", "#62A25D");
            Set("ControlColor", "#62A25D");
            Set("ControlColorHover", "#62A25D");
        }

        /// <summary>
        /// Use to dynamically set the color of referenced element.
        /// </summary>
        /// <param name="reference">ref of the variable</param>
        /// <param name="value"> string value (color html)</param>
        public virtual void Set(string key, string value)
        {
            if (!Style.ContainsKey(key))
            {
                Style.Add(key, value);
            }
            else
            {
                Style[key] = value;
            }            
        }

        /// <summary>
        /// Load color template from a json each key has to match variable's name
        /// </summary>
        /// <param name="reference">ref of the variable</param>
        /// <param name="value"> string value (color html)</param>
        public virtual void SetFromJson(JObject json)
        {
            foreach (var item in json)
            {
                if (Style.ContainsKey(item.Key))
                {
                    Style[item.Key] = item.Value;
                }
                else
                {
                    Style.Add(item.Key, item.Key);
                }
            }
        }

        /// <summary>
        /// Get Style Property
        /// </summary>
        /// <param name="key">name of key</param>
        public virtual string Get(string key)
        {
            if (Style.ContainsKey(key)) {
                return Style.GetValue(key).ToString();
            }
            return "";
        }
    }
}
