const userModules = [
  {
    moduleId: 61,
    moduleName: "Geo Location",
    description: "Geo Location Services",
    picPath: "far fa-compass",
    url: "#",
    order: 1,
    minAccessLvl: "100",
    parentId: 0,
    component: "GeoLocation",
    status: "0",
    permission: 2,
    subModuleList: [
      {
        moduleId: 1,
        moduleName: "Fleet Tracking",
        description:
          "The latest positions of your vessel fleet with traffic pointers",
        picPath: "fa fa-compass",
        url: "prepviewMap",
        order: 1,
        minAccessLvl: "100",
        parentId: 61,
        component: "FleetTracking",
        status: "0",
        permission: 1
      },
      {
        moduleId: 60,
        moduleName: "Geo Fencing",
        description: "Draw areas in map and produce actions",
        picPath: "fa fa-compass",
        url: "prepGeoFencing",
        order: 2,
        minAccessLvl: "100",
        parentId: 61,
        component: "GeoFencing",
        status: "0",
        permission: 2
      }
    ]
  },
  {
    moduleId: 2,
    moduleName: "SIGMA",
    description:
      "A compilation of com services that provide a complete \u0026 vertical solution",
    picPath: "fas fa-desktop",
    url: "#",
    order: 2,
    minAccessLvl: "100",
    parentId: 0,
    status: "0",
    permission: 1,
    subModuleList: [
      {
        moduleId: 7,
        moduleName: "Traffic Reporting",
        description:
          "Overview of the bandwidth usage with time and credit based analytics",
        picPath: "fa fa-bar-chart",
        url: "prepareLogs",
        order: 1,
        minAccessLvl: "100",
        parentId: 2,
        component: "TrafficReporting",
        status: "1",
        permission: 1
      },
      {
        moduleId: 8,
        moduleName: "Crew Management",
        description: "Create and Edit PIN usage information",
        picPath: "images/pin.jpg",
        url: "#",
        order: 2,
        minAccessLvl: "100",
        parentId: 2,
        component: "CrewManagement",
        status: "1",
        permission: 1,
        subModuleList: [
          {
            moduleId: 33,
            moduleName: "Order Management",
            description:
              "View, Edit and Manage PIN orders using the management toolbox",
            picPath: "images/pin_orders_btn.jpg",
            url: "pinOrders",
            order: 2,
            minAccessLvl: "100",
            parentId: 8,
            component: "OrderManagement",
            status: "2",
            permission: 2
          },
          {
            moduleId: 11,
            moduleName: "Crew Rates",
            description: "Edit and apply rates for PIN based Crew Services",
            picPath: "images/manage_pin_rates.jpg",
            url: "pinRates",
            order: 3,
            minAccessLvl: "100",
            parentId: 8,
            component: "CrewRates",
            status: "1",
            permission: 2
          },
          {
            moduleId: 49,
            moduleName: "SIGMA Users",
            description: "Manage remote users on SIGMA devices",
            picPath: "images/sigmaUsersIcon.png",
            url: "prepareSigmaUsers",
            order: 4,
            minAccessLvl: "100",
            parentId: 8,
            component: "SigmaUsers",
            status: "0",
            permission: 2
          },
          {
            moduleId: 68,
            moduleName: "Crew Profiles",
            description: "Crew Profiles",
            picPath: "images/wavenet.jpg",
            url: "prepareCrewProfile",
            order: 5,
            minAccessLvl: "100",
            parentId: 8,
            component: "CrewProfiles",
            status: "0",
            permission: 2
          }
        ]
      },
      {
        moduleId: 9,
        moduleName: "Remote Access",
        description:
          "Access your computers and terminal devices with our platform",
        picPath: "images/remote.jpg",
        url: "getRemote",
        order: 3,
        minAccessLvl: "100",
        parentId: 2,
        component: "RemoteAccess",
        status: "1",
        permission: 2
      },
      {
        moduleId: 10,
        moduleName: "Networking / Filtering",
        description:
          "Have full control over every setting or feature on your vessels",
        picPath: "images/onf.jpg",
        url: "#",
        order: 4,
        minAccessLvl: "100",
        parentId: 2,
        status: "1",
        permission: 2,
        subModuleList: [
          {
            moduleId: 21,
            moduleName: "Interface Configuration",
            description:
              "Setup the device Interfaces in respect to function and networks",
            picPath: "images/wavenet.jpg",
            url: "prepareInterface",
            order: 1,
            minAccessLvl: "100",
            parentId: 10,
            component: "InterfaceConfiguration",
            status: "0",
            permission: 2
          },
          {
            moduleId: 22,
            moduleName: "Firewall Management",
            description: "Setup firewall rules and services",
            picPath: "images/firewallIcon.png",
            url: "prepareFwRules",
            order: 2,
            minAccessLvl: "100",
            parentId: 10,
            component: "FirewallManagement",
            status: "2",
            permission: 2
          },
          {
            moduleId: 23,
            moduleName: "Port Forwarding",
            description: "Setup Port Forwarding in Sigma device",
            picPath: "images/portforwarding.gif",
            url: "portForwarding",
            order: 3,
            minAccessLvl: "100",
            parentId: 10,
            component: "PortForwarding",
            status: "2",
            permission: 2
          },
          {
            moduleId: 48,
            moduleName: "SIGMA Switch",
            description: "Management of switch ports on SIGMA Gateway",
            picPath: "images/ethPortsIcon.png",
            url: "prepareEthPorts",
            order: 3,
            minAccessLvl: "100",
            parentId: 10,
            component: "SigmaSwitch",
            status: "0",
            permission: 2
          },
          {
            moduleId: 67,
            moduleName: "Bandwidth Pools",
            description: "Bandwidth Pools",
            picPath: "images/wavenet.jpg",
            url: "prepareBlPool",
            order: 5,
            minAccessLvl: "100",
            parentId: 10,
            component: "BandwidthPools",
            status: "0",
            permission: 2
          },
          {
            moduleId: 65,
            moduleName: "DNS",
            description: "View and manage DNS",
            url: "prepDNS",
            order: 6,
            minAccessLvl: "100",
            parentId: 10,
            component: "DNS",
            status: "1",
            permission: 2
          },
          {
            moduleId: 66,
            moduleName: "DHCP",
            description: "View and manage DHCP",
            url: "prepDHCP",
            order: 7,
            minAccessLvl: "100",
            parentId: 10,
            component: "DHCPManagement",
            status: "0",
            permission: 2
          },
          {
            moduleId: 69,
            moduleName: "Diagnostics",
            description: "Diagnostics",
            url: "prepareDiagnostics",
            order: 8,
            minAccessLvl: "100",
            parentId: 10,
            component: "Diagnostics",
            status: "2",
            permission: 2
          },
          {
            moduleId: 28,
            moduleName: "Failover Configuration",
            description: "Define the failover rules for the SIGMA networks",
            picPath: "images/wavenet.jpg",
            url: "prepFailOver",
            order: 9,
            minAccessLvl: "100",
            parentId: 10,
            component: "FailoverConfiguration",
            status: "2",
            permission: 2
          },
          {
            moduleId: 71,
            moduleName: "Static Routing",
            description: "Static Routing",
            url: "prepStaticRouting",
            order: 9,
            minAccessLvl: "100",
            parentId: 10,
            component: "StaticRouting",
            status: "2",
            permission: 2
          },
          {
            moduleId: 72,
            moduleName: "IPSec",
            description: "Manage secure network connections",
            url: "prepIPSec",
            order: 12,
            minAccessLvl: "100",
            parentId: 10,
            component: "IPSec",
            status: "2",
            permission: 2
          }
        ]
      },
      {
        moduleId: 50,
        moduleName: "Virtualization",
        description: "Virtualization Menu",
        picPath: "images/virtIcon.png",
        url: "#",
        order: 5,
        minAccessLvl: "100",
        parentId: 2,
        status: "0",
        permission: 2,
        subModuleList: [
          {
            moduleId: 51,
            moduleName: "Health Monitoring",
            description:
              "Get SIGMA Gateway device health information and reports",
            picPath: "images/healthIcon.png",
            url: "prepareHealthMonitoring",
            order: 2,
            minAccessLvl: "100",
            parentId: 50,
            component: "HealthMonitoring",
            status: "0",
            permission: 2
          },
          {
            moduleId: 47,
            moduleName: "VM Management",
            description: "Manage Virtual machines on SIGMA Gateway",
            picPath: "images/vmIcon.png",
            url: "prepareVM",
            order: 7,
            minAccessLvl: "100",
            parentId: 50,
            component: "VmManagement",
            status: "0",
            permission: 2
          }
        ]
      },
      {
        moduleId: 25,
        moduleName: "Telephony",
        description: "View and edit VOIP telephony setup, SIP assignments",
        picPath: "fa fa-bar-chart",
        url: "prepTelephony",
        order: 5,
        minAccessLvl: "100",
        parentId: 2,
        component: "Telephony",
        status: "2",
        permission: 2
      },
      {
        moduleId: 19,
        moduleName: "Order Form",
        description:
          "Fill in the specifications for a new equipment request initiation",
        picPath: "fa fa-list-alt",
        url: "prepOrders",
        order: 6,
        minAccessLvl: "100",
        parentId: 2,
        component: "Orders",
        status: "0",
        permission: 1
      },
      {
        moduleId: 32,
        moduleName: "File Synchronization",
        description:
          "Create scenarios, edit and view your synchronization services",
        picPath: "images/sync_services.jpg",
        url: "prepFileSync",
        order: 7,
        minAccessLvl: "100",
        parentId: 2,
        component: "FileSync",
        status: "2",
        permission: 2
      },
      {
        moduleId: 70,
        moduleName: "System Logs",
        description: "Manage system services and view logs",
        url: "prepSystemLogs",
        order: 8,
        minAccessLvl: "100",
        parentId: 2,
        component: "SystemLogs",
        status: "2",
        permission: 2
      }
    ]
  },
  {
    moduleId: 4,
    moduleName: "Billing Information",
    description:
      "Your invoices and billing reports. Export to PDF or WorkSheets",
    picPath: "far fa-credit-card",
    url: "goToBilling",
    order: 4,
    minAccessLvl: "100",
    parentId: 0,
    component: "BillingInfo",
    status: "1",
    permission: 1,
    subModuleList: [
      {
        moduleId: 30,
        moduleName: "Airtime Reports",
        description:
          "Create a customized report based on monthly and annual use",
        picPath: "images/airtime_reports.jpg",
        url: "prepareAirReport",
        order: 1,
        minAccessLvl: "100",
        parentId: 4,
        component: "AirtimeReports",
        status: "2",
        permission: 1
      }
    ]
  },
  {
    moduleId: 13,
    moduleName: "Administration Console",
    description:
      "Use Sigma tools in order to manage view and configure the system",
    picPath: "fas fa-database",
    url: "#",
    order: 8,
    minAccessLvl: "100",
    parentId: 0,
    status: "0",
    permission: 1,
    subModuleList: [
      {
        moduleId: 16,
        moduleName: "Users",
        description: "Create a user account assigned to a Company Services",
        picPath: "images/create_user.jpg",
        url: "userManage",
        order: 1,
        minAccessLvl: "100",
        parentId: 13,
        component: "Users",
        status: "0",
        permission: 2
      },
      {
        moduleId: 17,
        moduleName: "User Groups",
        description:
          "Create a specific privilege set that can be assigned to multiple users",
        picPath: "images/create_user_groups.jpg",
        url: "permissionsManager",
        order: 2,
        minAccessLvl: "100",
        parentId: 13,
        component: "UserGroups",
        status: "0",
        permission: 2
      },
      {
        moduleId: 15,
        moduleName: "Vessels",
        description: "Create a new Vessel assigned to a company",
        picPath: "images/create_vessel.jpg",
        url: "vesselManage",
        order: 3,
        minAccessLvl: "100",
        parentId: 13,
        component: "Vessels",
        status: "0",
        permission: 2
      },
      {
        moduleId: 20,
        moduleName: "Vessel Groups",
        description:
          "Create groups of Vessels in order to easily control your fleet",
        picPath: "images/vgroups.jpg",
        url: "vesselGroupManage",
        order: 4,
        minAccessLvl: "100",
        parentId: 13,
        component: "VesselGroups",
        status: "0",
        permission: 2
      },
      {
        moduleId: 14,
        moduleName: "Companies",
        description: "Create a new Company entry in the database",
        picPath: "images/create_company.jpg",
        url: "companyManage",
        order: 5,
        minAccessLvl: "100",
        parentId: 13,
        component: "Companies",
        status: "0",
        permission: 2
      },
      {
        moduleId: 58,
        moduleName: "Providers",
        description: "Create providers in order to control companies",
        picPath: "",
        url: "prepareProvider",
        order: 8,
        minAccessLvl: "200",
        parentId: 13,
        component: "Providers",
        status: "0",
        permission: 2
      },
      {
        moduleId: 46,
        moduleName: "GX Order Form",
        description: "Sales Form for GX orders",
        picPath: "images/gxOrderForm.png",
        url: "prepgxorderform",
        order: 9,
        minAccessLvl: "100",
        parentId: 13,
        component: "GxOrder",
        status: "0",
        permission: 2
      },
      {
        moduleId: 63,
        moduleName: "Audit Logs",
        description: "Overview of the audit logs",
        url: "prepareAuditLogs",
        order: 10,
        minAccessLvl: "200",
        parentId: 13,
        component: "AuditLogs",
        status: "0",
        permission: 2
      }
    ]
  },
  {
    moduleId: 56,
    moduleName: "SIGMA Provisioning",
    description: "Provision and configuration of SIGMA devices",
    picPath: "fas fa-cogs",
    url: "#",
    order: 9,
    minAccessLvl: "100",
    parentId: 0,
    status: "0",
    permission: 2,
    subModuleList: [
      {
        moduleId: 53,
        moduleName: "SIGMA Request Form",
        description: "Online Form for requesting SIGMA Devices",
        picPath: "fa fa-wpforms",
        url: "prepRequestFormDevice",
        order: 1,
        minAccessLvl: "100",
        parentId: 56,
        component: "SigmaRequestForm",
        status: "0",
        permission: 2
      },
      {
        moduleId: 55,
        moduleName: "Configuration Wizard",
        description:
          "View, run, or clone Configuration Wizard for SIGMA devices",
        picPath: "fa fa-cogs",
        url: "prepConfigWiz",
        order: 2,
        minAccessLvl: "100",
        parentId: 56,
        component: "ConfigWizard",
        status: "0",
        permission: 2
      },
      {
        moduleId: 54,
        moduleName: "Dashboard",
        description: "Manage SIGMA devices",
        picPath: "fa fa-dashboard",
        url: "prepDashboard",
        order: 3,
        minAccessLvl: "100",
        parentId: 56,
        component: "Dashboard",
        status: "0",
        permission: 2
      }
    ]
  },
  {
    moduleId: 38,
    moduleName: "PoP Master",
    description: "SpeedCast POP Management",
    picPath: "fas fa-satellite-dish",
    url: "#",
    order: 9,
    minAccessLvl: "100",
    parentId: 0,
    component: "PopMaster",
    status: "2",
    permission: 2,
    subModuleList: [
      {
        moduleId: 39,
        moduleName: "SIM Information",
        description: "View Traffic and SIM Card information",
        picPath: "fa fa-mobile",
        url: "showVesselInfo",
        order: 1,
        minAccessLvl: "100",
        parentId: 38,
        component: "SimInfo",
        status: "2",
        permission: 2
      },
      {
        moduleId: 44,
        moduleName: "GX Management",
        description: "View GX status and Management",
        picPath: "fa fa-signal",
        url: "prepstatus",
        order: 2,
        minAccessLvl: "100",
        parentId: 38,
        component: "GxManagement",
        status: "0",
        permission: 2
      }
    ]
  }
];
export default userModules;
