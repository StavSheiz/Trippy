
const calcLocationDegreeOfCloseness = function(location1, location2){
    
    // Same place
    if(location1['place_id'] == location2['place_id']){
        return 2;

    // Under place 2
    } else {

        var places = location1["address_components"];

        var isUnder = 0;

        for(var p in places) {
            if(places[p]['long_name'] == location2['name']){
                isUnder = 1;
            }
        }

        return isUnder;
    } 


    // unrealated


}

module.exports = {
    calcLocationDegreeOfCloseness: calcLocationDegreeOfCloseness
}

/*
var location2 = 
    {
        "address_components": [
            {
                "long_name": "Haifa",
                "short_name": "Haifa",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Haifa",
                "short_name": "Haifa",
                "types": [
                    "administrative_area_level_2",
                    "political"
                ]
            },
            {
                "long_name": "Haifa District",
                "short_name": "Haifa District",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "Israel",
                "short_name": "IL",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "adr_address": "<span class=\"locality\">Haifa</span>, <span class=\"country-name\">Israel</span>",
        "formatted_address": "Haifa, Israel",
        "geometry": {
            "location": {
                "lat": 32.7940463,
                "lng": 34.989571
            },
            "viewport": {
                "northeast": {
                    "lat": 32.842681,
                    "lng": 35.079493
                },
                "southwest": {
                    "lat": 32.7565638,
                    "lng": 34.954059
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
        "id": "ce107df708c7c55d3a1dcc8a22f8f7eb923ef2a2",
        "name": "Haifa",
        "photos": [
            {
                "height": 3016,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116166939396608796807/photos\">Alex T.</a>"
                ],
                "photo_reference": "CmRaAAAASoahrlVBYmA2rC_XREzBHzPR-kuhNqnew_2hR_EI48rkT7po1n2N2PAUmPKuCdonQVJnodyLjIige39tTTHBHKRZ78iCLWQPCAOT_ShAWYqIsQFMeY-Q2naXZpkn2JKQEhDwKx7PZ7-XK6Jc8MCsz47lGhQa6Pdv7ViHyGNdpdu-JYZaeEDivQ",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106497153903897202571/photos\">Tal Golan</a>"
                ],
                "photo_reference": "CmRaAAAAcRvbBNB6mkSfBpOHCtxNobAbNkdjOSZPxsBrAlzJq4h8wXree9UjBgiLhRxoxQ0Goi3OXCzWyQ0x99QdBn5na1M5WH3eXoHuHkqAA9C-ZgnoEXmWFpAZ7vXDQXigAO5fEhDT5HXtzVMVaS4Oir2Fbgl0GhQIXIGaQ9iHxYJFUaCS-mc7NL19RA",
                "width": 4032
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106145426583526658818/photos\">Amit Daniel</a>"
                ],
                "photo_reference": "CmRaAAAAUM-Ckq2eyLvDzmbnXCORuabHG5ORoq7uZtZX0Pdrtw4in0gHkQhGwg6Kf9W5p9hXUxmAwCYACG9Mnvr9DgzTexcvXHEOPMoXgzY0XpoaLNNvv-M_4NBloLTqhkwdNgAeEhCXpNiQAFLqcsbnPtwdOmHqGhSkNijFZe63D5S5ApIv5JKYFerUYQ",
                "width": 4608
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114842248603409981401/photos\">Ersin Altin</a>"
                ],
                "photo_reference": "CmRaAAAArGBsNYKWtLrOANxqruO3C1qKn9uifrD-0g64920UMga55qo4-kep9eNI8OpQouYHwhpwNnyeQN-a_lD9ai9xGHYSLxh5gB8TyGx6s8VOs0FeUj1t4LPQiR9rwZVLX1JxEhB9fJSCUtJt_V5WOmszIBgqGhRdfptL69Pq-Yaqu_TH2qBOPw586g",
                "width": 2048
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104432833209518793034/photos\">Danylo Karpenko</a>"
                ],
                "photo_reference": "CmRaAAAA-KzFMdxYW_lE-fthl9xV3oSB3L1BzPy_x7DHgWb8B_T35iLQEZZ4Qhxlh3-LfKzgiCrxtCFY4ZWGWOTDNsYQ1N4TG4gmHV7q5ntIZDAuLpWWgSTzB5LXI3PlUb7AF0JwEhAQ_1qBRQJF44TvTlUG309BGhRuUudu3d7b3CZR1wsEEjzukf-19w",
                "width": 5184
            },
            {
                "height": 2976,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107823561941544192777/photos\">Avivit Blecher</a>"
                ],
                "photo_reference": "CmRaAAAApEIDxXV_FLcXHp34entYXOzE362a9awRjq9_JKZti3Iftayib9gYXXnvbP2OyTIomEvEES7lqUKBU844oxHqXM1Jy0_8VYNJoi9PNjgTUQGDJd_-dljirNHJeZXpy6FSEhA6QgVQgX_GYJBWqG8KPXhcGhRQUab2ZWZ-RlkNHA4qSsjDQYSPoA",
                "width": 3968
            },
            {
                "height": 3078,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104652817595342670969/photos\">Amir Or</a>"
                ],
                "photo_reference": "CmRaAAAAKD25ofSLsb3FhozGvAGH4ZbvpIL6eGPAV8kWaLMlxjRb-IsW_1VS_SdZunyE1AOOJwzI6O6GADU3jp4bBpnFpCwZUieny1Vtk90Ol23BXE9uDb5VPB5gio6d0p1Thb0MEhCo3JUM_yEg40wUMj8dM-zHGhTdc6Z9TsQtmtNlB5ACE6B8Ior16A",
                "width": 5472
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103243736651937798175/photos\">Xc Hfg</a>"
                ],
                "photo_reference": "CmRaAAAARZdEmQYDXBKA03E6l7lHO2Rnpv7NoIu3JFGvTS0NtXeVS5lSTvF9KxYU9kNF3VV5LRNIikl704Cl2k6fFS2sXVnMzl4jYzhNaSFazljwBRQkij0-y6IMYMM3nQuFlDvFEhDRWp_5ZvW9v29E8ZnSDW8jGhTe-8wIk5-7TdflkAgoOSXabwf_-Q",
                "width": 5312
            },
            {
                "height": 600,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104200655761274125660/photos\">Nisim Samama ツ</a>"
                ],
                "photo_reference": "CmRaAAAAkqnEmsMH1-P4yZU97IeYha0GxwkxqNx6-b0kCcP-Wfb-x5tYnn4hkDtU9atE6GWVvXLTS9YuOKJPlVZDUwnjxREVynSY3whLrSe4Olnn9QW8m6W_DAd1Qta1nmDfZpQCEhAKqUZUkgpajGotfSll5c3-GhSboIuY80bHsgKrmgrf5eRFaw53qw",
                "width": 800
            },
            {
                "height": 2848,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101454942650424935228/photos\">Mircea Beju</a>"
                ],
                "photo_reference": "CmRaAAAA3lWSDDEfZJDBnHf8w-9W_OXRjeHyFypw9z-KPm6-FAtruB6Ugoh8HQCWx-WP8mz7qrCI73q1htebn_ZsUCO1GAcZiplXCDJUTbVjXNFGB9mT7lz0kPAb_EvfKwjaGPx0EhBoDb0AEHbY39fQGAvnwJGxGhTri-9eCUsA26gw9Yri4cwdRrWU6w",
                "width": 4288
            }
        ],
        "place_id": "ChIJRegNdUy6HRURmlKBKpgjXcM",
        "reference": "ChIJRegNdUy6HRURmlKBKpgjXcM",
        "scope": "GOOGLE",
        "types": [
            "locality",
            "political"
        ],
        "url": "https://maps.google.com/?q=Haifa,+Israel&ftid=0x151dba4c750de845:0xc35d23982a81529a",
        "utc_offset": 120,
        "vicinity": "Haifa"
    }

var location1 =  {
        "address_components": [
            {
                "long_name": "Peru",
                "short_name": "PE",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "adr_address": "<span class=\"country-name\">Peru</span>",
        "formatted_address": "Peru",
        "geometry": {
            "location": {
                "lat": -9.189966999999998,
                "lng": -75.015152
            },
            "viewport": {
                "northeast": {
                    "lat": -0.0387769,
                    "lng": -68.65232879999999
                },
                "southwest": {
                    "lat": -18.4483,
                    "lng": -81.3867001
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
        "id": "534b4792b5a292d05cb06e921aee3eb2b206ceb3",
        "name": "Peru",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117001335936320855073/photos\">Celine Muntoni</a>"
                ],
                "photo_reference": "CmRaAAAAFb3ymzPex5Jk2hwrRa8BNeMT6Cxls58AdgPCPIVP59PYcw4erTLUKezRv2J-rLpLWf1f3rgst63ytDSiRVeoCfwXc2GIzfCFbEWCsW7WlQ7qWciGrFmSlumURzCerdMcEhAvTKmIqF7cO9AvOgtrizJ6GhR_LwS-vHYbf79O5xgw7A9gDyLW9A",
                "width": 4032
            },
            {
                "height": 1200,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108867008647358362778/photos\">Willem Slaets</a>"
                ],
                "photo_reference": "CmRaAAAA_GdP1IZQM73ACXC050qWdtYHtGMbcaoornH83tnD5isalz04yRBruP_jcKLJnSINWTSW5vUDQEnBRiUYoRO6wFSUFPb2txXVD2qSoI6oV4b0ts9yiSfKphYflxNvEe8aEhBEH5OSlKpYnnyKsUP6NwsvGhTtVKNoUEqogM2TXD1EK66dAPcDag",
                "width": 1600
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101001561862058426912/photos\">Photo World</a>"
                ],
                "photo_reference": "CmRaAAAAfdxwR6UZzbEpWDxWCRNYvaNzWQl523XaQau3uGmMDkcSharlF2mPhp1Wft1_eaVY7ykAsIA2HQ_qw53bP-hxmv75Kjr-hZZzkDNIDuUXv1LlB0YxQfqTVe2Q98XQv48_EhCxT74t2A5O7gvGOjR7fxbWGhR9yePCD45RosVqA8pf59HUllHNDA",
                "width": 4912
            },
            {
                "height": 1200,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118072346237540124229/photos\">Eugenio Gálvez</a>"
                ],
                "photo_reference": "CmRaAAAAQMVwoDQriOJqKXHVpzgXiSgC7byf0gFX7C_vkps73D57lhGL5Rp8O2KfZdMu3BSNdJMGBu7-D0_FWmOzdv7qY5BnzWyGZ-xhGiHKIO1_K4qKv8tA4xOyreb-YFXiYNKdEhALzou_hCZjoRntE_DfhqcWGhSBL6LOMLQedhY8jFvUKUQ7IIfPug",
                "width": 1600
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112984148961572183616/photos\">Vladimir Davydov</a>"
                ],
                "photo_reference": "CmRaAAAA7scz9ig2X7HGDq78REI92ZmK4SGtAtwPpKNtMyK7eW56aMV7UqxWKQKL-iNRGEu_n48GeXKfysdZHlBYfdlpHtnfJ9cr8ECUsaYUAw8sJhBmgi8W2rOWqLAaulduvf8UEhBzzbCs7lHuBgHM7JNBmITBGhRUtli_f8OrqlYfmka7enH2vTVNyQ",
                "width": 4032
            },
            {
                "height": 750,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106149948142845905010/photos\">benyasaad Haroual</a>"
                ],
                "photo_reference": "CmRaAAAARw9Mwt5eBQZHQ2OtI5tGmJyeFpxZIbyRoe2Lhr-QbxB8MJeQC6Zghc13bxpPazOmv4L9-Bmh4qh29zr7ygnLFoq6OR_0Vt7yyK1kF7MEfnxlKNmOxdbOJ7xL7pcUmhFTEhC9sEVNM-Cjl7d-eAwOIXQTGhQfK5yJcdzHTdiR5j_P9BF7zSIzUw",
                "width": 996
            },
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104481451201878090955/photos\">Daniel Papaleo</a>"
                ],
                "photo_reference": "CmRaAAAAcoyWIQuqnUtGH6tJ1nnc-pNX4zWJvnK_Q1_IM95_HotJfQGW3Jnc88fu4Y3LOFYzf3XZ_x2Lk_CGQW3MfMTnyL7x_lHdjyLPeWZnfpRFDf-rox4w0-kqegVkd16ec5vREhB0YH-E_l7zFT_EZplc63zrGhStm1NQ9_KSRoN7qOPz_fKURxar6A",
                "width": 1280
            },
            {
                "height": 662,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102528302250081866409/photos\">Ruble Kuriakose</a>"
                ],
                "photo_reference": "CmRaAAAAf3Pn-N_eiE7lbJsPQFt12BfVL1L7a8BXechHycYymYindf-N6kNylhklVK4Ev-T5zDQpiO12SA77wOrXJpakS9g5gEAUi7aKlTFMZhon157uLaOm2fXyGme24OrT9UDvEhDDjooM-dwAqrNzFtrxhY1XGhQyPRRaYDHWUHIKnOmUlFJ5cz8ieA",
                "width": 1000
            },
            {
                "height": 1200,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108867008647358362778/photos\">Willem Slaets</a>"
                ],
                "photo_reference": "CmRaAAAAzYECOzjtGPqOXeFdnn2z_AcwYlQ0C85kOcJYKmB7LRAFYxBFeVYGuHxAxJAJEMuiKhjVQreXp0NhQYN4eHAapqC2SweQWOGBSoFCjJdwKgVab2L1BBJqu4oFawZY8zvKEhDs90EKTmsYfVF2IyTriMw7GhQAqIyJ7L4Ct0LI8XVRzCwtO0g-Ug",
                "width": 1600
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101001561862058426912/photos\">Photo World</a>"
                ],
                "photo_reference": "CmRaAAAAoQyzYirKrE5UK0FTlqJSxobpiH21Qt0oRsEwUpg051YEG4JxxVTM4xMkjz_waWqskHRRvymWPwQXdAu-L-hUOKfLq-EuSoiY5SL0zQkd9oz4APB1IVtuJRpOC4gjw1T9EhB9fvTfIs0OSR02ZTHrzP0YGhQtNYHQDxS43kHen1tRSFyAtQM-Cg",
                "width": 4912
            }
        ],
        "place_id": "ChIJ9RRZwFDIBZERSAYheRIBnvI",
        "reference": "ChIJ9RRZwFDIBZERSAYheRIBnvI",
        "scope": "GOOGLE",
        "types": [
            "country",
            "political"
        ],
        "url": "https://maps.google.com/?q=Peru&ftid=0x9105c850c05914f5:0xf29e011279210648",
        "utc_offset": -300
    }

console.log(calcLocationDegreeOfCloseness(location1, location2));
*/