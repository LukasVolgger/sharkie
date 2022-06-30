// A new instance of a level
const level_1 = new Level(

    // ############################################### Background objects ###############################################
    // ### new BackgroundObject(scene, section, index, levelSection)
    // ##################################################################################################################
    // ### scene = 'light', 'dark'
    // ### section = 1, 2 (Always changing. First 1 then 2)
    // ### index = 0, 1, 2, 4 (Always increasing from 0 - 4)
    // ### levelSection = 0 - x (Section of the level. A section is 719 px long. Always increasing from 0 - x)
    // ##################################################################################################################

    [
        new BackgroundObject('light', 1, 0, 0),
        new BackgroundObject('light', 1, 1, 0),
        new BackgroundObject('light', 1, 2, 0),
        new BackgroundObject('light', 1, 3, 0),
        new BackgroundObject('light', 1, 4, 0),

        new BackgroundObject('light', 2, 0, 1),
        new BackgroundObject('light', 2, 1, 1),
        new BackgroundObject('light', 2, 2, 1),
        new BackgroundObject('light', 2, 3, 1),
        new BackgroundObject('light', 2, 4, 1),

        new BackgroundObject('light', 1, 0, 2),
        new BackgroundObject('light', 1, 1, 2),
        new BackgroundObject('light', 1, 2, 2),
        new BackgroundObject('light', 1, 3, 2),
        new BackgroundObject('light', 1, 4, 2),

        new BackgroundObject('light', 2, 0, 3),
        new BackgroundObject('light', 2, 1, 3),
        new BackgroundObject('light', 2, 2, 3),
        new BackgroundObject('light', 2, 3, 3),
        new BackgroundObject('light', 2, 4, 3)
    ],

    // ############################################### Coins ###############################################
    // ### new Coin(x, y)
    // #####################################################################################################
    // ### x = coordinate
    // ### y = coordinate
    // #####################################################################################################
    [
		new Coin(312, 192),
		new Coin(508, 88),
		new Coin(724, 28),
		new Coin(1068, 244),
		new Coin(1184, 184),
		new Coin(1292, 120),
		new Coin(1748, 276),
    ],

    // ############################################### Life ###############################################
    // ### new Life(x, y)
    // ####################################################################################################
    // ### x = coordinate
    // ### y = coordinate
    // ####################################################################################################

    [
		new Life(544, 364),
		new Life(1552, 388),
		new Life(1988, 364)
    ],

    // ############################################### Poison ###############################################
    // ### new Poison(type, x, y)
    // ######################################################################################################
    // ### type = 'animated', 'light_left', 'light_right', 'dark_left', 'dark_right'
    // ### x = coordinate
    // ### y = coordinate
    // #######################################################################################################

    [
		new Poison('animated', 308, 388),
		new Poison('animated', 952, 392),	
		new Poison('dark_right', 1916, 400)
    ],

    // ############################################### Enemies ###############################################
    // ### new PufferFish(color, x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored) 
    // #######################################################################################################
    // ### color = 'green', 'orange', 'red'
    // ### x = coordinate
    // ### y = coordinate
    // ### direction = 'horizontal', 'vertical'
    // ### startPoint = coordinate for waypoint start (Should be same as x/y, depending on 'horizontal'/'vertical')
    // ### endPoint = coordinate for waypoint end
    // ### speed = 0 - 5
    // ### imgInitiallyMirrored = 0, 1 (off/on)
    // #######################################################################################################
    // ### new JellyFishRegular(color, x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored)
    // #######################################################################################################
    // ### color = 'lila', 'yellow'
    // ### x = coordinate
    // ### y = coordinate
    // ### direction = 'horizontal', 'vertical'
    // ### startPoint = coordinate for waypoint start (Should be same as x/y, depending on 'horizontal'/'vertical')
    // ### endPoint = coordinate for waypoint end
    // ### speed = 0 - 5
    // ### imgInitiallyMirrored = 0, 1 (off/on)
    // #######################################################################################################
    // ### new JellyFishDangerous(color, x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored)
    // #######################################################################################################
    // ### color = 'green', 'pink'
    // ### x = coordinate
    // ### y = coordinate
    // ### direction = 'horizontal', 'vertical'
    // ### startPoint = coordinate for waypoint start (Should be same as x/y, depending on 'horizontal'/'vertical')
    // ### endPoint = coordinate for waypoint end
    // ### speed = 0 - 5
    // ### imgInitiallyMirrored = 0, 1 (off/on)
    // #######################################################################################################
    // #######################################################################################################
    // ### new EndBoss(x, y, startX, startY)
    // #######################################################################################################
    // ### x = coordinate
    // ### y = coordinate
    // ### startX = starting point X for ai movement
    // ### startY = starting point Y for ai movement
    // #######################################################################################################

    [,
		new PufferFish('red', 244, 24, 'horizontal', 244, 600, 1.3, 1),
		new PufferFish('green', 224, 380, 'horizontal', 224, 540, 1, 1),
		new JellyFishRegular('lila', 860, 16, 'vertical', 16, 280, 1.5, 0),
		new PufferFish('orange', 988, 20, 'horizontal', 988, 1296, 1.2, 1),
		new PufferFish('green', 1064, 312, 'horizontal', 1064, 1360, 1.8, 1),
		new JellyFishRegular('yellow', 1412, 52, 'vertical', 52, 250, 1.2, 0),
        new EndBoss(2000, 50, 2000, 50)
    ],

    // ############################################### Barriers ###############################################
    // ### new BarrierTunnelAbove(x, y)
    // ########################################################################################################
    // ### new BarrierTunnelBelow(x, y)
    // ########################################################################################################
    // ### new BarrierRock(x, y) 
    // ########################################################################################################
    // ### new BarrierWall(x, y)
    // ########################################################################################################
    // ### x = coordinate 
    // ### y = coordinate (y = 290 is on floor)
    // ########################################################################################################

    [
		new BarrierWall(640, 120)
    ],

    // ############################################### level_end_x ###############################################

    2000

);