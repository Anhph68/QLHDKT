using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KTNN.Startup))]
namespace KTNN
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
