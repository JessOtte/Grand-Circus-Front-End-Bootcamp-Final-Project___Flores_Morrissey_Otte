function EventService ($http, $q, grEvents) {
        const service = this;

        service.eventDetails = null;
        service.appid = "016e00dbb08bcaf3c211004b0312d013";

        // http request to get weather info 
        service.fetchWeather = () => {
            return $q(function (resolve, reject) {
                $http({
                    url: `https://api.openweathermap.org/data/2.5/weather/`,
                    method: `GET`,
                    params: {
                        id: '4994358',
                        cnt: 8,
                        units: 'imperial',
                        appid: service.appid,
                    }
                })
                    .then((response) => {
                        let data = response.data;
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }

        service.fetchForecast = () => {

            // http request to get forescat info

            return $q(function (resolve, reject) {

               $http({
                   url: `https://api.openweathermap.org/data/2.5/forecast/`,
                   method: `GET`,
                   params: {
                       id: '4994358',
                       cnt: 8,
                       units: 'imperial',
                       appid: service.appid
                   }
               })
                   .then((response) => {
                       let data = response.data;
                       resolve(data);
                   })
                   .catch((error) => {
                       reject(error);
                   })
           })
       }

        service.fetchEvents = (categoryID) => {
    
            // http request to get events info 
            let url =  `https://www.eventbriteapi.com/v3/events/search/?location.address=49503&location.within=60mi&start_date.keyword=today&expand=venue&token=IYBEWZZEFXT3EA6JODBG`;

            if ( categoryID ) {
               url+= ('&categories='+categoryID);
            }
            return $q(function (resolve, reject) {
               
                $http({
                    url: url,
                    method: `GET`
                    
                })
                    .then((response) => {
                        let data = response.data;
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }

        
// http request for categories 

        service.fetchCategories = () => {
    
            // http request to get events info 
    
            return $q(function (resolve, reject) {
               
                $http({
                    url: `https://www.eventbriteapi.com/v3/categories/?token=ERGFWMEMWJN2BHWUQT7X`,
                    method: `GET`
                    
                })
                    .then((response) => {
                        let data = response.data;
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }

        
        service.setDetails = (event) => {
            service.eventDetails = event;
        }

        service.getDetails = () => {
            return service.eventDetails;
        }

        service.grEvents = [
            {
        destination:"Frederik Meijer Gardens",
        outdoor: true,
            rank:'1',
            googleReview: "4.8",
            summary: "Colorful gardens filled with art & music",
            description: "Sprawling botanical gardens with diverse sculptures hosts indoor art exhibits & summer concerts.",
            website: "https://www.meijergardens.org/",
            img:"https://media.wzzm13.com/assets/WZZM/images/43c8ba3c-511c-4833-b847-326811170009/43c8ba3c-511c-4833-b847-326811170009_750x422.png",
            },
            {
          destination:"John Ball Zoo",
          outdoor: true,
              rank: "2",
              googleReview: "4.5",
              summary: "Interactive zoo with an aquarium",
              description: "Exhibits include touchable stingrays, feedable parakeets & camel rides, plus aquarium with penguins.",
              website: "https://www.jbzoo.org/",
              img: "https://i2.wp.com/www.woodtv.com/wp-content/uploads/sites/51/2019/06/iYpR95MY.jpg?resize=2560%2C1440&ssl=1",
              },
              {
          destination:"Grand Rapids Public Museum",
          outdoor: false,
                rank: "3",
                googleReview: "4.6",
                summary: "Museum & planetarium in an ex-flour mill",
                description: "Museum offers 3 floors of history in an ex-flour mill plus exhibits, a 1928 carousel & planetarium",
                website: "https://www.grpm.org/",
                img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Grand_Rapids_Public_Museum.jpg",
                },
                {
            destination:"Grand Rapids Art Museum",
            outdoor: false,
                  rank: "4",
                  googleReview: "4.5",
                  summary: "Mod space for 19th- & 20th-century art",
                  description: "Modern space filled with U.S. & European art offers family-friendly activities & classical concerts.",
                  website: "http://www.artmuseumgr.org/",
                  img: "http://www.artmuseumgr.org/wp-content/uploads/2017/12/1200x675-AboutPage.jpg",
                  },
                  {
            destination:"The Gerald Ford Presidential Museum",
            outdoor: false,
                    rank: "5",
                    googleReview: "4.6",
                    summary: "Interactive exhibits on president's life",
                    description: "Museum tells Ford's life story using artifacts, interactive exhibits & a replica of the Oval Office.",
                    website: "https://www.fordlibrarymuseum.gov/",
                    img: "https://www.fordlibrarymuseum.gov/img/Museum-Education-Center.jpg",
                    },
        {
            destination:"Millennium Park",
            outdoor: true,
                    rank: "6",
                    googleReview: "4.6",
                    summary: "Urban green space with beach, Splashpad & wetlands",
                    description: "Vast urban park reclaims heavily used land for 6-acre beach, splashed & wetlands with hiking trails.",
                    website: "http://www.kentcountyparks.org/millennium/index.php",
                    img: "https://ocba.com/wp-content/uploads/2015/07/Millennium-Playground.jpg",
                    },
                  {
            destination:"Grand Rapids Children's Museum",
            outdoor: false,
                    rank: "7",
                    googleReview: "4.6",
                    summary: "Interactive workshops for children",
                    description: "Hands-on learning space for kids ages 2-10 features a real beehive & workshops like robot building.",
        website: "http://www.grcm.org/",
                    img: "http://www.artmuseumgr.org/wp-content/uploads/formidable/6/ChildrensMuseum_960@2x.jpg",
        weather: "",
                    },
                  {
            destination:"Rosa Parks Circle",
            outdoor: true,
                    rank: "8",
                    googleReview: "4.6",
                    summary: "Ice-skating & concert space",
                    description: "Designed by artist Maya Lin, this public plaza offers ice skating in winter & concerts in summer.",
                    img: "https://planning-org-uploaded-media.s3.amazonaws.com/image/Rosa-Parks-Circle-Concert.jpg",
        website: "https://www.grandrapidsmi.gov/Government/Departments/Parks-and-Recreation/Rosa-Parks-Circle-Ice-Rink",
        weather: "",
                    },
                  {
            destination:"Downtown Market Grand Rapids",
            outdoor: true,
                    rank: "9",
                    googleReview: "4.6",
                    summary: "Year-round local food market",
                    description: "A year-round hub of local food innovation, healthy-living education and right-before-your-eyes preparation.",
                    img: "https://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_1000,g_face,q_50/Michigan/account_photos/5490/ceb51aa85d5dc01013a74e58f841f54c_000125.jpg",
        website: "http://downtownmarketgr.com/",
        weather: "",
                    },
                  {
            destination:"Meyer May House",
            outdoor: false,
                    rank: "10",
                    googleReview: "4.6",
                    summary: "Frank Lloyd Wright home with free tours",
                    description: "Restored early-1900s home designed by Frank Lloyd Wright, with free guided tours some days.",
                    img: "http://www.heritagehillweb.org/wp-content/uploads/2012/10/450-Madison-SE-3.jpg",
        website: "http://meyermayhouse.steelcase.com/",
        weather: "",
                    },
                  {
            destination:"Robinette's Apple Haus & Winery",
            outdoor: false,
                    rank: "11",
                    googleReview: "4.6",
                    summary: "Orchard, winery, trail running, and running",
                    description: "Established in 1911, Robinette's Apple Haus & Winery has been a West Michigan staple for over 100 years. Visit for activities, donuts, cider, gifts & more.",
                    img: "https://robinettes.com/wp-content/uploads/2016/07/applehaus_web.jpg",
        website: "http://www.robinettes.com/",
        weather: "",
                    },
                  {
            destination:"Heritage Hill",
            outdoor: true,
                    rank: "12",
                    googleReview: "4.6",
                    summary: "",
                    description: "",
                    img: "https://www.rapidgrowthmedia.com/galleries/Features/issue518/ftrapidblog194.jpg",
        website: "https://en.wikipedia.org/wiki/Heritage_Hill_Historic_District_(Grand_Rapids,_Michigan)",			
        weather: "",
                    },
                  {
            destination:"Salvation Army Kroc Center",
            outdoor: false,
                    rank: "13",
                    googleReview: "4.6",
                    summary: "Community center",
                    description: "Located on 20+ acres, the 105,000 square-foot Salvation Army Kroc Center is unique in the Grand Rapids area. On the surface, you’ll see a fitness center; a church; recreation areas like a pool, a gym, and a climbing wall. ",
                    img: "http://www.grkroccenter.org/images/outside5.jpg?crc=41290348",
        website: "http://www.grkroccenter.org/",
        weather: "",
                    },
                  {
            destination:"Craigs Cruisers",
            outdoor: false,
                    rank: "14",
                    googleReview: "4.6",
                    summary: "Family fun center",
                    description: "Family fun center offering go-karts, bumper boats, mini golf, laser tag & more, plus a pizza buffet.",
                    img: "https://res.cloudinary.com/simpleview/image/upload/crm/grandrapids/craigs_cruisers00180_c8582492-5056-a36a-069906e4989d576e.jpg",
        website: "http://www.craigscruisers.com/",
        weather: "",
                    },
                  {
            destination:"Three Mile Project",
            outdoor: false,
                    rank: "15",
                    googleReview: "4.6",
                    summary: "Youth Community Center",
                    description: "A 34,000 square foot former warehouse that now contains sports courts, theaters, a skate park, a ninja course, video games, table games, and a cafe.",
                    img: "https://i.ytimg.com/vi/ITcn7mrfzAs/maxresdefault.jpg",
        website: "http://3mp.org/",
        weather: "",
                    },
                  {
            destination:"Urban Institute for Contemporary Arts",
            outdoor: false,
                    rank: "16",
                    googleReview: "4.6",
                    summary: "Art exhibits, theater, music & more",
                    description: "Multi-use facility devoted to the creative arts, with programs in visual arts, film, music & dance.",
                    img: "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_360,q_50,w_640/v1/clients/grandrapids/UICA_980345b7-7699-41f2-aafe-f6fff960f6da.jpg",
        website: "http://www.uica.org/",
        weather: "",
                    },
                  {
            destination:"Cannonsburg Ski Area",
            outdoor: true,
                    rank: "17",
                    googleReview: "4.6",
                    summary: "Tubing, Skiing & Zipline",
                    description: "Celebrate your important day with family and friends in a rustic, ski lodge setting overlooking beautiful views of Cannonsburg ski area.",
                    img: "https://img2.onthesnow.com/image/xl/10/100063.jpg",
        website: "https://cannonsburg.com/",
        weather: "",
                    },
                  {
            destination:"Fish Ladder Park",
            outdoor: true,
                    rank: "18",
                    googleReview: "4.6",
                    summary: "Park for fishing & fish migration",
                    description: "Destination for watching fish migrate via special ladder, with separate areas for fishing in river.",
                    img: "https://live.staticflickr.com/7606/28146816466_739c7c39d7_b.jpg",
        website: "https://www.friendsofgrparks.org/parks/find-a-park/fish-ladder-park/",
        weather: "",
                    },
                  {
            destination:"La Grande Vitesse - Calder Plaza",
            outdoor: true,
                    rank: "19",
                    googleReview: "4.6",
                    summary: "Huge sculpture by Alexander Calder",
                    description: "This abstract red sculpture, created by Alexander Calder in 1969, anchors a large city plaza.",
                    img: "http://1.bp.blogspot.com/-GrYww0sh9Zc/ToNBwYzSgwI/AAAAAAAAjtA/eaKrc62o7tM/s1600/LI-sculp-AC-003b.jpg",
        website: "http://arts.gov/about/40th-anniversary-highlights/initial-public-art-project-becomes-landmark",
        weather: "",
                    },
                  {
            destination:"Reed’s Lake",
            outdoor: true,
                    rank: "20",
                    googleReview: "4.6",
                    summary: "Year-round fishing plus a park & trail",
                    description: "Large, scenic lake on a park with a walking path, public boat launch & year-round fishing.",
                    img: "https://s2.best-wallpaper.net/wallpaper/2560x1600/1203/Reeds-lake-of-sky_2560x1600.jpg",
        website: "https://en.wikipedia.org/wiki/Reeds_Lake",
        weather: "",
                    },
                  {
            destination:"TreeRunner Grand Rapids Adventure Park",
            outdoor: true,
                    rank: "21",
                    googleReview: "4.6",
                    summary: "Outdoor adventure park & obstacle course",
                    description: "Outdoor adventure park featuring obstacle courses with zip-lines, swinging logs & rope bridges.",
                    img: "https://assets.simpleviewcms.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/grandrapids/IMG_14990_c776d4ed-5056-a36a-067831a2c93ab078.jpg",
        website: "http://www.treerunnergrandrapids.com/",
        weather: "",
                    },
                  {
            destination:"Provin Trails",
            outdoor: true,
                    rank: "22",
                    googleReview: "4.6",
                    summary: "Park for hiking & cross-country skiing",
                    description: "46-acre forested park with interconnected loops of natural trails for hiking & cross-country skiing.",
                    img: "https://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_1000,g_face,q_50/Michigan/account_photos/11149/3a2d6b1e0c33e7a00314a4941a8a854a_provintrails1.jpg",
        website: "http://www.kentcountyparks.org/provintrails/index.php",
        weather: "",
                    },
                  {
            destination:"Riverside Park",
            outdoor: true,
                    rank: "23",
                    googleReview: "4.6",
                    summary: "Hiking, biking, fishing & disc golf",
                    description: "Nature trails for hiking, biking & bird-watching plus fishing, kayaking, winter sports & disc golf.",
                    img: "https://assets.simpleviewcms.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/grandrapids/Riverside_Park_00010_c817e10d-5056-a36a-06593a2d7a671e67.jpg",
        website: "https://www.grandrapidsmi.gov/Directory/Places/Parks/Riverside-Park",
        weather: "",
                    },
                  {
            destination:"Catch Air Grand Rapids",
            outdoor: false,
                    rank: "24",
                    googleReview: "4.6",
                    summary: "Inflatables & Jungle Gym Place Center",
                    description: "Play center for children 12 and under",
                    img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/97/2b/5a/catch-air.jpg",
        website: "https://catchairparty.com/location/grand-rapids/",
        weather: "",
                    },
                  {
            destination:"Oasis Hot Tub Gardens",
            outdoor: true,
                    rank: "25",
                    googleReview: "4.6",
                    summary: "Hourly hot tub rentals",
                    description: "A calm, restorative effects of indulging in a hot tub combined with the visually soothing surroundings of a well-tended indoor or outdoor garden setting.",
                    img: "https://oasishottubs.com/wp-content/uploads/2019/03/Casablanca-fall-2018.png",
        website: "http://www.oasishottubs.com/",
        weather: "",
                    },
                  {
            destination:"Boulder Ridge Wild Animal Park",
            outdoor: true,
                    rank: "26",
                    googleReview: "4.6",
                    summary: "Wildlife Park",
                    description: "Set on 80 acres, this private zoo hosts a range of exotic animals, many that can be touched.",
                    img: "https://i.pinimg.com/originals/fb/0a/6b/fb0a6b12baec697d5f2c7a464db9029c.jpg",
        website: "https://www.boulderridgewap.com/",
        weather: "",
                    },
                  {
            destination:"Cathedral of Saint Andrew",
            outdoor: false,
                    rank: "27",
                    googleReview: "4.6",
                    summary: "Cathedral",
                    description: "The Cathedral of Saint Andrew is a Catholic cathedral located in Grand Rapids, Michigan, United States. It is the seat of the Diocese of Grand Rapids.",
                    img: "https://media-cdn.tripadvisor.com/media/photo-s/12/3e/0c/c7/photo0jpg.jpg",
        website: "http://cathedralofsaintandrew.org/",
        weather: "",
                    },
                  {
            destination:"GO Scavenger Hunts",
            outdoor: true,
                    rank: "28",
                    googleReview: "4.6",
                    summary: "Self-guided Scavenger Hunt",
                    description: "Twenty plus challenges. Two hours. One epic adventure.",
                    img: "https://photos.scavengerhunt.com/scavenger_hunt_locations/Downtown_Grand_Rapids_Scavenger_Hunt_Grand_Rapids_Michigan_team_building_1528992285_large.jpg",
        website: "",
        weather: "",
                    },
                  {
            destination:"Ah-Nab-Awen Park",
            outdoor: true,
                    rank: "29",
                    googleReview: "4.6",
                    summary: "Riverfront hangout with city views",
                    description: "Small park on the Grand River with city views & a large grassy area for community events.",
                    img: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.simpleviewinc.com/simpleview/image/upload/crm/grandrapids/Ah-Nab-Awen-Park_c7f7e924-5056-a36a-06a6c88c7bab69b3.jpg",
        website: "http://www.friendsofgrparks.org/parks/find-a-park/ah-nab-awen/",
        weather: "",
                    },
                  {
            destination:"Blandford Nature Center",
            outdoor: true,
                    rank: "30",
                    googleReview: "4.6",
                    summary: "Enjoy, explore, and learn in nature",
                    description: "We lease 143 acres from the City of Grand Rapids and own 121 acres to use both the land and wildlife as the perfect backdrop to provide experiences that engage people to actively use and interact with our environment, our heritage and our connection to natural systems, as well as empower people to embrace nature, new perspectives, and sustainable practices.",
                    img: "https://townsquare.media/site/45/files/2017/05/blandford-nature-center-fairey-homes.jpg?w=980&q=75",
        website: "https://blandfordnaturecenter.org/",
        weather: "",
                    },
                  {
            destination:"Ecosystem Preserve",
            outdoor: true,
                    rank: "31",
                    googleReview: "4.6",
                    summary: "Nature and hiking",
                    description: " The Ecosystem Preserve features 44 public acres of forest, wetlands, and native gardens. Admission is free. Over a mile of walking trails are open every day from dawn to dusk.",
                    img: "https://media-cdn.tripadvisor.com/media/photo-s/09/b4/76/37/calvin-college-ecosystem.jpg",
        website: "http://www.calvin.edu/academic/eco-preserve/",
        weather: "",
                    },
                  {
            destination:"Schwallier's Country Basket",
            outdoor: true,
                    rank: "32",
                    googleReview: "4.6",
                    summary: "Corn maze, donuts and u-pick apples",
                    description: "Apple orchard and farm market where you can savor life's simple pleasures.",
                    img: "https://res.cloudinary.com/simpleview/image/upload/crm/grandrapids/Schwallier-s_Country_Basket_0002_c816e9a6-5056-a36a-06153e2b95cd20b6.jpg",
        website: "http://www.schwalliers.com/",
        weather: "",
                    },
                  {
            destination:"Kent Trails",
            outdoor: true,
                    rank: "33",
                    googleReview: "4.6",
                    summary: "Nature trails for hiking & biking",
                    description: "Kent Trails is a fifteen-mile rail trail in Kent County, Michigan that runs through the cities of Grand Rapids, Grandville, Walker, Wyoming and Byron Township and is part of a network of.",
                    img: "https://cdn-assets.alltrails.com/uploads/photo/image/20469213/extra_large_0dc782a3eb1889c4ed220f713e72aeab.jpg",
        website: "https://en.wikipedia.org/wiki/Kent_Trails",
        weather: "",
                    },
                  {
            destination:"Great Lakes Pub Cruiser",
            outdoor: false,
                    rank: "34",
                    googleReview: "4.6",
                    summary: "A 16 person bike that looks like a rolling bar",
                    description: "We are a 16 person party bike in Grand Rapids MI. Our season is from March 17 to Oct 31. You must have at least 6 people to rent the bike for a tour and no more than 16 people.",
                    img: "https://media-cdn.tripadvisor.com/media/photo-s/07/3a/64/de/getlstd-property-photo.jpg",
        website: "https://greatlakespubcruiser.com/",
        weather: "",
                    },
                  {
            destination:"Escape Michigan - Escape Rooms",
            outdoor: false,
                    rank: "35",
                    googleReview: "4.6",
                    summary: "Fun & Interactive team building challenge",
                    description: "Escape Michigan lets your team race against the clock to discover hidden clues and challenges. Using teamwork and skill, your group must work together to solve puzzles and escape the room!",
                    img: "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_585,q_75,w_1920/v1/clients/grandrapids/Grand%20Rapids%20Entrance%20Sign-1_fe648f4d-826b-482d-94a1-a94e491c3e3b.jpg",
        website: "http://escapemichigan.com/",
        weather: "",
                    },
                  {
            destination:"AJ'S family fun center",
            outdoor: false,
                    rank: "36",
                    googleReview: "4.6",
                    summary: "Kid-friendly games, go-karts & arcade",
                    description: "Kid-oriented entertainment center featuring mini-golf, go-karts, laser tag, arcade games & more.",
                    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Qa5gBRQtaQsaVg-Xpv-_Xw/o.jpg",
        website: "http://ajsfamilyfun.com/",
        weather: "",
                    },
                  {
            destination:"Grand Rapids African American Museum & Archives",
            outdoor: false,
                    rank: "37",
                    googleReview: "4.6",
                    summary: "Folksy exhibits & oral histories",
                    description: "Homespun exhibits honoring the history of the local black community, with a gift shop.",
                    img: "https://i2.wp.com/perspective3-d.com/wp-content/uploads/2018/10/10.07.2018_11.52.46.jpg?fit=1920%2C1080&ssl=1",
        website: "http://www.graama.org/",
        weather: "",
                    },
                  {
            destination:"Hillcrest Dog Park",
            outdoor: true, 
                    rank: "38",
                    googleReview: "4.6",
                    summary: "Dog Park",
                    description: "Fenced in park for dogs with two separate areas for big and small dogs.",
                    img: "https://townsquare.media/site/44/files/2019/04/RS14634_499423458.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        website: "http://grcity.us/",
        weather: "",
                    },
                  {
            destination:"Richmond Park",
            outdoor: true,
                    rank: "39",
                    googleReview: "4.6",
                    summary: "Sports, trails, a pond & a swimming pool",
                    description: "Large park featuring various sports facilities, plus trails, a playground, a pond & an outdoor pool.",
                    img: "https://otg.imgix.net/assets/grid/grand-rapids/west-side/richmond-park/GR_West_Side-2371-1.jpg?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=58bb7ce12bc7cf0775c5b193233ba887",
        website: "http://www.friendsofgrparks.org/parks/find-a-park/richmond-park/",
        weather: "",
                    },
                  {
            destination:"Huff Park",
            outdoor: true, 
                    rank: "40",
                    googleReview: "4.6",
                    summary: "Playground, field & a wetlands boardwalk",
                    description: "City park with a playground & ball field, plus a wetlands boardwalk trail with interpretive signs.",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHPEJPN1s3KeEqYc0zpo2eX0o8ii_VxvdSCTxYopJbnp-sSHANw",
        website: "http://www.friendsofgrparks.org/parks/find-a-park/huff-park/",
        weather: "",
                    },
                  {
            destination:"The Murder Mystery Company",
            outdoor: false,
                    rank: "41",
                    googleReview: "4.6",
                    summary: "Interactive Dinner",
                    description: "Dinner theater chain where audience participation helps actors solve a murder mystery.",
                    img: "https://www.osf.com/wp-content/uploads/2018/10/OSF-murder-mystery-wide-group-whodunnit-1-1200x713.jpg",
        website: "https://www.grimprov.com/",
        weather: "",
                    },
                  {
            destination:"Johnson Park",
            outdoor: true, 
                    rank: "42",
                    googleReview: "4.6",
                    summary: "Riverside natural area with trails",
                    description: "Natural area on the Grand River with play fields, trails, picnic shelters & fishing.",
                    img: "https://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_1000,g_face,q_50/Michigan/account_photos/9885/b00e9eb2fc75b1060c9c6f79188e2f6a_DSC_0920.jpg",
        website: "https://www.kentcountyparks.org/johnson/index.php",
        weather: "",
                    },
                  {
            destination:"Target Axe Throwing",
            outdoor: true,
                    rank: "43",
                    googleReview: "4.6",
                    summary: "Indoor axe throwing range",
                    description: "Grand Rapids' first indoor axe throwing range!",
                    img: "https://i0.wp.com/www.grmag.com/wp-content/uploads/2019/04/Target-Axe-Throwing.jpg?fit=1024%2C538&ssl=1",
        website: "",
        weather: "",
                    },
                  {
            destination:"Fowling Warehouse Grand Rapids",
            outdoor: false,
                    rank: "44",
                    googleReview: "4.6",
                    summary: "Hybrid sport of football & bowling",
                    description: "Hybrid sport of football & bowling",
                    img: "https://presenter-production.s3.amazonaws.com/photos2/47783/size_q/IMG_8746.jpg?1518556286",
        website: "http://www.fowlingwarehouse.com/",
        weather: "",
                    },
                  {
            destination:"Beer City Ale Trail",
            outdoor: true,
                    rank: "45",
                    googleReview: "4.6",
                    summary: "Self-guided tour of Breweries in Grand Rapids",
                    description: "Download the map and enjoy the day exploring Beer City USA",
                    img: "https://us-east.manta.joyent.com/condenast/public/cnt-services/production/2014/08/06/53e2f0fbc2d3f39d3610b01b_grand-rapids-beer-trail.jpg",
        website: "http://res.cloudinary.com/simpleview/image/upload/v1445225901/clients/grandrapids/ExpGR2015BeerMapsheet_466ae912-4050-43ca-b0b0-732591c4353c.pdf",
        weather: "",
                    },
        
                  {
            destination:"Lamar Park",
            outdoor: true,
                    rank: "46",
                    googleReview: "4.6",
                    summary: "Warm-weather spot for sports & splashing",
                    description: "This seasonal park has a splash pad plus a climbing wall, sports fields, fishing & a walking trail.",
                    img: "https://i0.wp.com/www.wktvjournal.org/wp-content/uploads/2017/06/lamar-park.jpg?ssl=1",
        website: "https://www.wyomingmi.gov/About-Wyoming/City-Departments/Parks-and-Recreation/Parks",
        weather: "",
                    },
                  {
            destination:"Dave & Buster's",
            outdoor: false,
                    rank: "47",
                    googleReview: "4.6",
                    summary: "Adult Arcade",
                    description: "Family-friendly chain offering a sports-bar-style setting for American food & arcade games.",
                    img: "https://media.graytvinc.com/images/DAVE+AND+BUSTERS1.jpg",
        website: "",
        weather: "",
                    },
                  {
            destination:"Tarry Hall Roller Rink ",
            outdoor: false,
                    rank: "48",
                    googleReview: "4.6",
                    summary: "Roller rink",
                    description: "Clean, safe and family friendly skating!",
                    img: "https://live.staticflickr.com/1592/24561854099_b91c9f424f_b.jpg",
        website: "",
        weather: "",
                    },
                  {
            destination:"Altitude Trampoline Park",
            outdoor: false,
                    rank: "49",
                    googleReview: "4.6",
                    summary: "Indoor Trampoline Park",
                    description: "14,000 square feet of indoor activities including a m trampoline court, kids court, foam pit, performance trampolines, dodgeball court, basketball dunking lanes, trapeze bar, tumble track, battle beam!",
                    img: "https://51ncfmh5mo-flywheel.netdna-ssl.com/wp-content/uploads/2018/12/NinjaCourse.png",
        website: "http://www.altitudegr.com/",
        weather: "",
                    },
                  {
            destination:"Jester's Court",
            outdoor: true,
                    rank: "50",
                    googleReview: "4.6",
                    summary: "Inflatables & Jungle Gym Place Center",
                    description: "West Michigan's largest indoor child entertainment center.",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQg28gMd5Q_-jn-n3V9LBLZYSfRhea8wpN0krDfcozJQJfOGr",
        website: "http://jesterscourt.com/",
        weather: "",
                      },
          ];
        

        // for recommending events based on weather
        // we need description string from API 
        service.recommendEvents = (string) => {
            let grEvents = service.grEvents;
            // console.log(string, grEvents);
            // console.log("hello");

            let events = grEvents.filter( (event) =>  {
                console.log(event);
                if(string.includes("rain")) {
                    return event.outdoor === false;
                }else if(string.includes("snow")) {
                    return event.outdoor === false;
                }else if(string.includes("thunderstorm")) {
                    return event.outdoor === false;
                }else if(string.includes("drizzle")) {
                    return event.outdoor === false;
                }else if(string.includes("sleet")) {
                    return event.outdoor === false;
                }else if(string.includes("shower")) {
                    return event.outdoor === false;
                }else if(string.includes("tornado")) {
                    return event.outdoor === false;
                }else if(string.includes("smoke")) {
                    return event.outdoor === false;
                }else {
                    return true;
                }

            })
            //Still working on logic her

            console.log(grEvents);
          
            //Still testing
            console.log("NEW EVENTS", events);
            return events;
        }
}
    
angular
    .module("WeatherEventApp")
    .service("EventService", ["$http", "$q", EventService]);
