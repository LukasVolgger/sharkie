// A new instance of a level
const level_2 = new Level(

    // ############################################### Background objects ###############################################
    // ### new BackgroundObject(scene, section, index, levelSection)
    // ##################################################################################################################
    // ### scene = 'light', 'dark'
    // ### section = 1, 2 (Always changing. First 1 then 2)
    // ### index = 0, 1, 2, 4 (Always increasing from 0 - 4)
    // ### levelSection = 0 - x (Section of the level. A section is 719 px long. Always increasing from 0 - x)
    // ##################################################################################################################

    [
        new BackgroundObject('dark', 1, 0, 0),
        new BackgroundObject('dark', 1, 1, 0),
        new BackgroundObject('dark', 1, 2, 0),
        new BackgroundObject('dark', 1, 3, 0),
        new BackgroundObject('dark', 1, 4, 0),

        new BackgroundObject('dark', 2, 0, 1),
        new BackgroundObject('dark', 2, 1, 1),
        new BackgroundObject('dark', 2, 2, 1),
        new BackgroundObject('dark', 2, 3, 1),
        new BackgroundObject('dark', 2, 4, 1),

        new BackgroundObject('dark', 1, 0, 2),
        new BackgroundObject('dark', 1, 1, 2),
        new BackgroundObject('dark', 1, 2, 2),
        new BackgroundObject('dark', 1, 3, 2),
        new BackgroundObject('dark', 1, 4, 2),

        new BackgroundObject('dark', 2, 0, 3),
        new BackgroundObject('dark', 2, 1, 3),
        new BackgroundObject('dark', 2, 2, 3),
        new BackgroundObject('dark', 2, 3, 3),
        new BackgroundObject('dark', 2, 4, 3),

        new BackgroundObject('dark', 1, 0, 4),
        new BackgroundObject('dark', 1, 1, 4),
        new BackgroundObject('dark', 1, 2, 4),
        new BackgroundObject('dark', 1, 3, 4),
        new BackgroundObject('dark', 1, 4, 4)
    ],

    // ############################################### Coins ###############################################
    // ### new Coin(x, y)
    // #####################################################################################################
    // ### x = coordinate
    // ### y = coordinate
    // #####################################################################################################

    [
        new Coin(548, 252),
        new Coin(612, 180),
        new Coin(696, 128),
        new Coin(1188, 244),
        new Coin(1656, 20),
        new Coin(2168, 112)
    ],

    // ############################################### Life ###############################################
    // ### new Life(x, y)
    // ####################################################################################################
    // ### x = coordinate
    // ### y = coordinate
    // ####################################################################################################

    [
        new Life(976, 52),
        new Life(2564, 412)
    ],

    // ############################################### Poison ###############################################
    // ### new Poison(type, x, y)
    // ######################################################################################################
    // ### type = 'animated', 'light_left', 'light_right', 'dark_left', 'dark_right'
    // ### x = coordinate
    // ### y = coordinate
    // #######################################################################################################

    [
        new Poison('dark_right', 96, 412),
        new Poison('animated', 1128, 412),
        new Poison('dark_right', 1588, 404)
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

    [
        new JellyFishDangerous('pink', 400, 100, 'vertical', 100, 240, .5, 0),
        new PufferFish('orange', 600, 128, 'horizontal', 600, 1000, 1.5, 1),
        new JellyFishDangerous('green', 1172, 64, 'vertical', 64, 300, 2, 0),
        new PufferFish('red', 1420, 352, 'horizontal', 1420, 1644, 1.5, 1),
        new PufferFish('green', 1924, 184, 'horizontal', 1924, 2396, 2.5, 1),
        new JellyFishDangerous('pink', 2572, 52, 'vertical', 52, 332, 1.5, 0),
        new EndBoss(3000, 50, 3000, 50)
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
        new BarrierRock(300, 290),
        new BarrierWall(1380, -250),
        new BarrierTunnelAbove(1800, 0),
        new BarrierTunnelBelow(1800, 290)
    ],

    // ############################################### level_end_x ###############################################

    3000

);