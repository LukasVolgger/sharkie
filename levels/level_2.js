// A new instance of a level
const level_2 = new Level(

  // ############################################### Background objects ###############################################
  // ### new BackgroundObject(szene, section, index, levelSection)
  // ##################################################################################################################
  // ### szene = 'light', 'dark'
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
    new BackgroundObject('dark', 2, 4, 3)
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
    new Coin(1188, 244)
  ],

  // ############################################### Life ###############################################
  // ### new Life(x, y)
  // ####################################################################################################
  // ### x = coordinate
  // ### y = coordinate
  // ####################################################################################################

  [
    new Life(976, 52),
    new Life(2000, 360)
  ],

  // ############################################### Poison ###############################################
  // ### new Poison(type, x, y)
  // ######################################################################################################
  // ### type = 'animated', 'light_left', 'light_right', 'dark_left', 'dark_right'
  // ### x = coordinate
  // ### y = coordinate
  // #######################################################################################################

  [
    new Poison('dark_left', 924, 404),
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
    new JellyFishDangerous('pink', 400, 100, 'vertical', 100, 300, .5, 0),
    new PufferFish('green', 600, 128, 'horizontal', 600, 1000, 1.5, 1),
    new PufferFish('orange', 740, 300, 'horizontal', 740, 1000, 2, 1),
    new JellyFishDangerous('green', 1172, 64, 'vertical', 64, 300, 2, 0),
    new PufferFish('red', 1316, 352, 'horizontal', 1316, 1644, 1.5, 1),
    new EndBoss(2000, 50, 2000, 50)
  ],

  // ############################################### Barriers ###############################################
	// ### new BarrierTunnelAbove(x)
  // ########################################################################################################
	// ### x = coordinate
	// ########################################################################################################
	// ### new BarrierTunnelBelow(x)
  // ########################################################################################################
	// ### x = coordinate
	// ########################################################################################################

  [
    new BarrierTunnel(720)
  ],

  // ############################################### level_end_x ###############################################

  2000

);