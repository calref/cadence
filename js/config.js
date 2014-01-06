/*
 * @package AJAX_Chat
 * @author Sebastian Tschan
 * @copyright (c) Sebastian Tschan
 * @license Modified MIT License
 * @link https://blueimp.net/ajax/
 */

// Ajax Chat config parameters:
var config = {

  // The channelID of the channel to enter on login (the loginChannelName is used if set to null):
  loginChannelID: null,
  // The channelName of the channel to enter on login (the default channel is used if set to null):
  loginChannelName: null,

  chatDesignator: 'crf',

  // The time in ms between update calls to retrieve new chat messages:
  timerRate: 3500,

  // The URL to retrieve the XML chat messages (must at least contain one parameter):
  ajaxURL: './?ajax=true',
  // The base URL of the chat directory, used to retrieve media files (images, sound files, etc.):
  baseURL: './',

  // A regular expression for allowed source URL's for media content (e.g. images displayed inline);
  regExpMediaUrl: '^((http)|(https)):\\/\\/',

  // If set to false the chat update is delayed until the event defined in ajaxChat.setStartChatHandler():
  startChatOnLoad: true,

  // Defines the IDs of DOM nodes accessed by the chat:
  domIDs: {
    // The ID of the chat messages list:
    chatList: 'chatList',
    // The ID of the online users list:
    onlineList: 'onlineList',
    // The ID of the message text input field:
    inputField: 'inputField',
    // The ID of the message text length counter:
    messageLengthCounter: 'messageLengthCounter',
    // The ID of the channel selection:
    channelSelection: 'channelSelection',
    // The ID of the style selection:
    styleSelection: 'styleSelection',
    // The ID of the emoticons container:
    emoticonsContainer: 'emoticonsContainer',
    // The ID of the color codes container:
    colorCodesContainer: 'colorCodesContainer',
    // The ID of the flash interface container:
    flashInterfaceContainer: 'flashInterfaceContainer',
    poniconList: 'poniconList'
  },

  // Defines the settings which can be modified by users:
  settings: {
    // Whether to display verbose log messages.
    verbose: true,
    // Render incoming HTML Markup.
    html: true,
    // Whether images are loaded.
    images: true,
    // Defines if color BBCode is replaced with the associated color HTML code:
    bbCodeColors: true,
    // Defines if hyperlinks are made clickable:
    hyperLinks: true,
    // Defines if line breaks are enabled:
    lineBreaks: true,
    // Defines if emoticon codes are replaced with their associated images:
    emoticons: true,

    // Defines if the focus is automatically set to the input field on chat load or channel switch:
    autoFocus: true,
    // Defines if the chat list scrolls automatically to display the latest messages:
    autoScroll: true,
    // The maximum count of messages displayed in the chat list (will be ignored if set to 0):
    maxMessages: 0,

    // Defines if long words are wrapped to avoid vertical scrolling:
    wordWrap: true,
    // Defines the maximum length before a word gets wrapped:
    maxWordLength: 32,

    // Defines the format of the date and time displayed for each chat message:
    dateFormat: '(HH:mm:ss)',

    // Defines if font colors persist without the need to assign them to each message:
    persistFontColor: false,
    // The default font color, uses the page default font color if set to null:
    fontColor: null,

    // Defines if sounds are played:
    audio: true,
    // Defines the sound volume (0.0 = mute, 1.0 = max):
    audioVolume: 1.0,

    // Defines the sound that is played when normal messages are reveived:
    soundReceive: 'sound_1',
    // Defines the sound that is played on sending normal messages:
    soundSend: 'sound_2',
    // Defines the sound that is played on channel enter or login:
    soundEnter: 'sound_3',
    // Defines the sound that is played on channel leave or logout:
    soundLeave: 'sound_4',
    // Defines the sound that is played on chatBot messages:
    soundChatBot: 'sound_5',
    // Defines the sound that is played on error messages:
    soundError: 'sound_6',

    // Defines if the document title blinks on new messages:
    blink: true,
    // Defines the blink interval in ms:
    blinkInterval: 500,
    // Defines the number of blink intervals:
    blinkIntervalNumber: 10
  },

  // Defines a list of settings which are not to be stored in a session cookie:
  nonPersistentSettings: [],

  // Defines the list of allowed BBCodes:
  bbCodeTags:[
    'b',
    'i',
    'u',
    's',
    'quote',
    'code',
    'color',
    'url',
    'img',
    'IMG',
    'URL',
    'COLOR',
    'table',
    'tr',
    'td'
  ],

  // Defines the list of allowed color codes:
  colorCodes: ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#FF0000', '#DC143C', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FFA07A', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#483D8B', '#6A5ACD', '#7B68EE', '#ADFF2F', '#7FFF00', '#7CFC00', '#00FF00', '#32CD32', '#98FB98', '#90EE90', '#00FA9A', '#00FF7F', '#3CB371', '#2E8B57', '#228B22', '#008000', '#006400', '#9ACD32', '#6B8E23', '#808000', '#556B2F', '#66CDAA', '#8FBC8F', '#20B2AA', '#008B8B', '#008080', '#00FFFF', '#00FFFF', '#E0FFFF', '#AFEEEE', '#7FFFD4', '#40E0D0', '#48D1CC', '#00CED1', '#5F9EA0', '#4682B4', '#B0C4DE', '#B0E0E6', '#ADD8E6', '#87CEEB', '#87CEFA', '#00BFFF', '#1E90FF', '#6495ED', '#4169E1', '#0000FF', '#0000CD', '#00008B', '#000080', '#191970', '#FFF8DC', '#FFEBCD', '#FFE4C4', '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#8B4513', '#A0522D', '#A52A2A', '#800000', '#FFFFFF', '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F', '#000000'],


  emoticons: {
    general: {
      baseURL: 'img/emoticons/',
      codes: {
        ':)': 'smile.png',
        ':(': 'sad.png',
        ';)': 'wink.png',
        ':P': 'razz.png',
        ':D': 'grin.png',
        ':|': 'plain.png',
        ':O': 'surprise.png',
        ':?': 'confused.png',
        '8o': 'eek.png',
        ':-(': 'crying.png',
        ':-*': 'kiss.png',
        'O:-D': 'angel.png',
        '>:-D': 'devilish.png',
        ':favorite:': 'favorite.png'
      },
    },
    pony: {
      baseURL: 'img/emoticons/mlp/',
      codes: {
        ':angel:': 'angel.png',
        ':abbored:': 'abbored.png',
        ':abhuh:': 'abhuh.png',
        ':absmile:': 'absmile.png',
        ':abwut:': 'abwut.png',
        ':abmeh:': 'abmeh.png',
        ':ajbaffle:': 'ajbaffle.png',
        ':ajcower:': 'ajcower.png',
        ':ajfrown:': 'ajfrown.png',
        ':ajhappy:': 'ajhappy.png',
        ':ajlie:': 'ajlie.png',
        ':ajsly:': 'ajsly.png',
        ':ajsup:': 'ajsup.png',
        ':ajugh:': 'ajugh.png',
        ':ajwut:': 'ajwut.png',
        ':hmmm:': 'hmmm.png',
        ':squintyjack:': 'squintyjack.png',
        ':applederp:': 'applederp.png',
        ':aran:': 'aran.png',
        ':bonbon:': 'bonbon.png',
        ':punchdrunk:': 'punchdrunk.png',
        ':thehorror:': 'thehorror.png',
        ':eeyup:': 'eeyup.png',
        ':macintears:': 'macintears.png',
        ':swagintosh:': 'swagintosh.png',
        ':cadence:': 'cadence.png',
        ':celestia:': 'celestia.png',
        ':celestiamad:': 'celestiamad.png',
        ':celestiawut:': 'celestiawut.png',
        ':cheerilee:': 'cheerilee.png',
        ':chrysalis:': 'chrysalis.png',
        ':cockatrice:': 'cockatrice.png',
        ':colgate:': 'colgate.png',
        ':crackle:': 'crackle.png',
        ':derp:': 'derp.png',
        ':derpwizard:': 'derpwizard.png',
        ':derpyhappy:': 'derpyhappy.png',
        ':derpyshock:': 'derpyshock.png',
        ':priceless:': 'priceless.png',
        ':whooves:': 'whooves.png',
        ':flutterblush:': 'flutterblush.png',
        ':flutterfear:': 'flutterfear.png',
        ':flutterjerk:': 'flutterjerk.png',
        ':fluttershh:': 'fluttershh.png',
        ':fluttershy:': 'fluttershy.png',
        ':fluttersrs:': 'fluttersrs.png',
        ':flutterwhoa:': 'flutterwhoa.png',
        ':flutterwink:': 'flutterwink.png',
        ':flutteryay:': 'flutteryay.png',
        ':yay:': 'flutteryay.png',
        ':loveme:': 'loveme.png',
        ':flutterroll:': 'flutterroll.png',
        ':gilda:': 'gilda.png',
        ':gin:': 'gin.png',
        ':grannysmith:': 'grannysmith.png',
        ':lunagasp:': 'lunagasp.png',
        ':lunasad:': 'lunasad.png',
        ':lunateehee:': 'lunateehee.png',
        ':nmm:': 'nmm.png',
        ':lunawait:': 'lunawait.png',
        ':happyluna:': 'happyluna.png',
        ':lyra:': 'lyra.png',
        ':lyracup:': 'lyracup.png',
        ':nebponder:': 'nebponder.png',
        ':octavia:': 'octavia.png',
        ':photofinish:': 'photofinish.png',
        ':ppboring:': 'ppboring.png',
        ':hahaha:': 'hahaha.png',
        ':huhhuh:': 'huhhuh.png',
        ':ppcute:': 'ppcute.png',
        ':ppseesyou:': 'ppseesyou.png',
        ':ohhi:': 'ohhi.png',
        ':party:': 'party.png',
        ':joy:': 'joy.png',
        ':pinkamina:': 'pinkamina.png',
        ':pinkiefear:': 'pinkiefear.png',
        ':ppshrug:': 'ppshrug.png',
        ':pinkieawe:': 'pinkieawe.png',
        ':rdannoyed:': 'rdannoyed.png',
        ':rdcool:': 'rdcool.png',
        ':rdeyebrow:': 'rdeyebrow.png',
        ':rdhappy:': 'rdhappy.png',
        ':louder:': 'louder.png',
        ':rdhuh:': 'rdhuh.png',
        ':gross:': 'gross.png',
        ':wingboner:': 'rdsitting.png',
        ':awwyeah:': 'awwyeah.png',
        ':rdsad:': 'rdsad.png',
        ':soawesome:': 'soawesome.png',
        ':rdsalute:': 'rdsalute.png',
        ':rdsitting:': 'rdsitting.png',
        ':rdsmile:': 'rdsmile.png',
        ':rdwut:': 'rdwut.png',
        ':rarityannoyed:': 'rarityannoyed.png',
        ':raritydaww:': 'raritydaww.png',
        ':raritydress:': 'raritydress.png',
        ':rarityjudge:': 'rarityjudge.png',
        ':raritynews:': 'raritynews.png',
        ':rarityprimp:': 'rarityprimp.png',
        ':raritysad:': 'raritysad.png',
        ':fabulous:': 'fabulous.png',
        ':wahaha:': 'wahaha.png',
        ':raritywhine:': 'raritywhine.png',
        ':raritywhy:': 'raritywhy.png',
        ':raritywut:': 'raritywut.png',
        ':rarityyell:': 'rarityyell.png',
        ':rarishock:': 'rarishock.png',
        ':aaaaa:': 'rarishock.png',
        ':scootacheer:': 'scootacheer.png',
        ':scootaloo:': 'scootaloo.png',
        ':cutealoo:': 'cutealoo.png',
        ':scootaplease:': 'scootaplease.png',
        ':scootaderp:': 'scootaderp.png',
        ':shiningarmor:': 'shiningarmor.png',
        ':silverspoon:': 'silverspoon.png',
        ':snails:': 'snails.png',
        ':snowflake:': 'snowflake.png',
        ':yeah:': 'snowflake.png',
        ':manspike:': 'manspike.png',
        ':spikenervous:': 'spikenervous.png',
        ':allmybits:': 'allmybits.png',
        ':spikepushy:': 'spikepushy.png',
        ':noooo:': 'noooo.png',
        ':spikewtf:': 'spikewtf.png',
        ':takealetter:': 'takealetter.png',
        ':spikemeh:': 'spikemeh.png',
        ':spikeohshit:': 'spikeohshit.png',
        ':spitfire:': 'spitfire.png',
        ':sotrue:': 'sotrue.png',
        ':sbstare:': 'sbstare.png',
        ':sbbook:': 'sbbook.png',
        ':dumbfabric:': 'dumbfabric.png',
        ':ohcomeon:': 'ohcomeon.png',
        ':sybeam:': 'sybeam.png',
        ':syblush:': 'syblush.png',
        ':syfear:': 'syfear.png',
        ':syrape:': 'syrape.png',
        ':sydrunk:': 'sydrunk.png',
        ':sysad:': 'sysad.png',
        ':sywtf:': 'sywtf.png',
        ':sywut:': 'sywut.png',
        ':sycastic:': 'sycastic.png',
        ':trixiesmug:': 'trixiesmug.png',
        ':fillytgap:': 'fillytgap.png',
        ':twiponder:': 'twiponder.png',
        ':twipride:': 'twipride.png',
        ':twibeam:': 'twibeam.png',
        ':twicrazy:': 'twicrazy.png',
        ':facehoof:': 'facehoof.png',
        ':twirage:': 'twirage.png',
        ':twiright:': 'twiright.png',
        ':twismile:': 'twismile.png',
        ':twismug:': 'twismug.png',
        ':twisquint:': 'twisquint.png',
        ':twistare:': 'twistare.png',
        ':rapidash:': 'twirage.png',
        ':dj:': 'dj.png',
        ':vsbass:': 'vsbass.png',
        ':vscurious:': 'vscurious.png',
        ':vsdeal:': 'vsdeal.png',
        ':vsderp:': 'vsderp.png',
        ':vsfilly:': 'vsfilly.png',
        ':vshair:': 'vshair.png',
        ':vshappy:': 'vshappy.png',
        ':vshey:': 'vshey.png',
        ':vshooves:': 'vshooves.png',
        ':vsjuice:': 'vsjuice.png',
        ':vslook:': 'vslook.png',
        ':vslying:': 'vslying.png',
        ':vsmine:': 'vsmine.png',
        ':vsmog:': 'vsmog.png',
        ':vssquint:': 'vssquint.png',
        ':vsnope:': 'vsnope.png',
        ':vsohyou:': 'vsohyou.png',
        ':vsomg:': 'vsomg.png',
        ':vsoooo:': 'vsoooo.png',
        ':vssad:': 'vssad.png',
        ':vssup:': 'vssup.png',
        ':vstear:': 'vstear.png',
        ':vswink:': 'vswink.png',
        ':vswtf:': 'vswtf.png',
        ':zecora:': 'zecora.png',
        ':yes:': 'yesberry.png',
        ':no:': 'noberry.png',
        ':ponywarn:': 'ponywarn.png'
      }
    }
  },

  poniconVersion: "v1.13",

  // Defines the available sounds loaded on chat start:
  soundFiles: {
    sound_1: 'sound_1',
    sound_2: 'sound_2',
    sound_3: 'sound_3',
    sound_4: 'sound_4',
    sound_5: 'sound_5',
    sound_6: 'sound_6',
    yay:     'yay',
    droneriots: 'droneriots'
  },


  // Once users have been logged in, the following values are overridden by those in config.php.
  // You should set these to be the same as the ones in config.php to avoid confusion.

  // Session identification, used for style and setting cookies:
  sessionName: 'ajax_chat',

  // The time in days until the style and setting cookies expire:
  cookieExpiration: 365,
  // The path of the cookies, '/' allows to read the cookies from all directories:
  cookiePath: '/',
  // The domain of the cookies, defaults to the hostname of the server if set to null:
  cookieDomain: null,
  // If enabled, cookies must be sent over secure (SSL/TLS encrypted) connections:
  cookieSecure: null,

  // The name of the chat bot:
  chatBotName: 'ChatBot',
  // The userID of the chat bot:
  chatBotID: 2147483647,

  // Allow/Disallow registered users to delete their own messages:
  allowUserMessageDelete: true,

  // Minutes until a user is declared inactive (last status update) - the minimum is 2 minutes:
  inactiveTimeout: 2,

  // UserID plus this value are private channels (this is also the max userID and max channelID):
  privateChannelDiff: 500000000,
  // UserID plus this value are used for private messages:
  privateMessageDiff: 1000000000,

  // Defines if login/logout and channel enter/leave are displayed:
  showChannelMessages: true,

  // Max messageText length:
  messageTextMaxLength: 1040,

  // Defines if the socket server is enabled:
  socketServerEnabled: false,
  // Defines the hostname of the socket server used to connect from client side:
  socketServerHost: 'localhost',
  // Defines the port of the socket server:
  socketServerPort: 1935,
  // This ID can be used to distinguish between different chat installations using the same socket server:
  socketServerChatID: 0,

  xmpp: {
    // This is NOT the server, but the domain portion of the JID.
    domain: 'eris.ermarian.net',
    boshURL: 'http://eris.ermarian.net:5280/http-bind/',
    muc_service: 'conference.ermarian.net',
    default_room: 'lounge',
    strings: {
      status: {
        'ERROR' : 'An error has occurred',
        'CONNECTING' : 'Connecting to the server...',
        'CONNFAIL' : 'The connection attempt failed',
        'AUTHENTICATING' : 'Authenticating...',
        'AUTHFAIL' : 'Authentication failed.',
        'CONNECTED' : 'You are now connected.',
        'DISCONNECTED' : 'You are now disconnected.',
        'DISCONNECTING' : 'Disconnecting from the server...',
        'ATTACHED' : 'Session resumed.',
      }
    }
  },

  ui: {
    css: ['dash', 'omg', 'Sulfur', 'Mercury', 'Carbon', 'Technetium'],
    userStatus: {
      'out': '%s leaves the channel.',
      'in': '%s enters the channel.',
      'online': '%s logs into the chat.',
      'offline': '%s logs out of the chat.',
      'away': '%s is away.',
      'available': '%s has returned.',
    },
    chatBotName: 'Ligrev',
  },

  bbcode: {
    b: '<span style="font-weight:bold">{content}</span>',
    i: '<span style="font-style:italic">{content}</span>',
    u: '<span style="text-decoration:underline">{content}</span>',
    s: '<span style="text-decoration:line-through">{content}</span>',
    // blink: '<span style="text-decoration:blink">{content}</span>', // blink and you're dead.
    quote: '<blockquote>{content}</blockquote>',
    code: '<code>{content}</code>',
    url: '<a href="{option}">{content}</a>',
    img: '<img src="{content}" alt="Image({content}" />',
    color: '<span style="color:{option}">{content}</span>'
  },
}
