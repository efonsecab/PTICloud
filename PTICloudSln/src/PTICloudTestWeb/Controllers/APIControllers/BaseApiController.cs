﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PTICloudTestWeb.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PTICloudTestWeb.Controllers.APIControllers
{
    public class BaseApiController: Controller
    {
        protected ISession Session
        {
            get
            {
                return this.HttpContext.Session;
            }
        }
    }
}
