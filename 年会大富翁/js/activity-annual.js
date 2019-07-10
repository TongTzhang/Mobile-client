
// var flag = true
var currentAllMoney = 200000000
var peoplemoney = 16400000
var allMoney = 200000000 - peoplemoney
var redTeam = {
  'stepAll': 0,
  'integral': 10,
  'top': 0,
  'left': 48,
  'redMoney': ["000'000'000", "5'000'000", "15'000'000", "30'000'000", "50'000'000"]
}
var blueTeam = {
  'stepAll': 0,
  'integral': 10,
  'top': 57,
  'left': 48,
  'blueMoney': ["000'000'000", "5'000'000", "15'000'000", "30'000'000", "50'000'000"]
}
var map = [
  { 'num': 0, 'integral': 0, 'money': 0, 'redTop': 0, 'redLeft': 48, 'blueTop': 57, 'blueLeft': 48, 'gameTip': '圆圆满满，获得一次重新抛骰子的机会！' },
  { 'num': 1, 'integral': 50, 'money': 0, 'redTop': 0, 'redLeft': 222, 'blueTop': 57, 'blueLeft': 222, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 2, 'integral': 30, 'money': 0, 'redTop': 0, 'redLeft': 392, 'blueTop': 57, 'blueLeft': 392, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 3, 'integral': 40, 'money': 0, 'redTop': 0, 'redLeft': 562, 'blueTop': 57, 'blueLeft': 562, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 4, 'integral': 50, 'money': 0, 'redTop': 0, 'redLeft': 734, 'blueTop': 57, 'blueLeft': 734, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 5, 'integral': 60, 'money': 0, 'redTop': 0, 'redLeft': 902, 'blueTop': 57, 'blueLeft': 902, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 6, 'integral': 50, 'money': 0, 'redTop': 128, 'redLeft': 902, 'blueTop': 185, 'blueLeft': 902, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 7, 'integral': 0, 'money': 1000000, 'redTop': 260, 'redLeft': 902, 'blueTop': 317, 'blueLeft': 902, 'gameTip': '获得个人狐币券，一定是加班时修来的福分！' },
  { 'num': 8, 'integral': 30, 'money': 0, 'redTop': 390, 'redLeft': 902, 'blueTop': 447, 'blueLeft': 902, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 9, 'integral': 0, 'money': 0, 'redTop': 521, 'redLeft': 902, 'blueTop': 578, 'blueLeft': 902, 'gameTip': '是福是祸，请抱紧主持人大腿！' },
  { 'num': 10, 'integral': 40, 'money': 0, 'redTop': 521, 'redLeft': 734, 'blueTop': 578, 'blueLeft': 734, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 11, 'integral': 60, 'money': 0, 'redTop': 521, 'redLeft': 562, 'blueTop': 578, 'blueLeft': 562, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 12, 'integral': -10, 'money': 0, 'redTop': 521, 'redLeft': 392, 'blueTop': 578, 'blueLeft': 392, 'gameTip': '手气有点臭，小心身后拖鞋！' },
  { 'num': 13, 'integral': 0, 'money': 2000000, 'redTop': 521, 'redLeft': 222, 'blueTop': 578, 'blueLeft': 222, 'gameTip': '获得个人狐币券，一定是加班时修来的福分！' },
  { 'num': 14, 'integral': 0, 'money': 0, 'redTop': 521, 'redLeft': 48, 'blueTop': 578, 'blueLeft': 48, 'gameTip': '是福是祸，请抱紧主持人大腿！' },
  { 'num': 15, 'integral': 40, 'money': 0, 'redTop': 390, 'redLeft': 48, 'blueTop': 447, 'blueLeft': 48, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 16, 'integral': 50, 'money': 0, 'redTop': 260, 'redLeft': 48, 'blueTop': 317, 'blueLeft': 48, 'gameTip': '恭喜获得团队积分，就喜欢你这样的！' },
  { 'num': 17, 'integral': 0, 'money': 1000000, 'redTop': 128, 'redLeft': 48, 'blueTop': 185, 'blueLeft': 48, 'gameTip': '获得个人狐币券，一定是加班时修来的福分！' }
]

// 遍历map数组

function getBlockIndex (whichblock) {
  for (var i = 0; i < map.length; i++) {
    if (i === whichblock) { return map[i] }
  }
}
function getRedIndex (a, b) {
  for (var i = 0; i < map.length; i++) {
    if (map[i].redTop === a && map[i].redLeft === b) { return map[i] }
  }
}

function getblueIndex (a, b) {
  for (var i = 0; i < map.length; i++) {
    if (map[i].blueTop === a && map[i].blueLeft === b) { return map[i] }
  }
}
var list = ['/public/build/img/activity/annual/bg-2.png', '/public/build/img/activity/annual/red-2.png', '/public/build/img/activity/annual/blue-2.png', '/public/build/img/activity/annual/bg.png', '/public/build/img/activity/annual/red-bag.png', '/public/build/img/activity/annual/blue-bag.png']
var imgs = []
function preloadImg (list, imgs) {
  var def = $.Deferred()
  var len = list.length
  $(list).each(function (i, e) {
    var img = new Image()
    img.src = e
    if (img.complete) {
      imgs[i] = img
      len--
      if (len === 0) {
        def.resolve()
      }
    } else {
      img.onload = (function (j) {
        return function () {
          imgs[j] = img
          len--
          if (len === 0) {
            def.resolve()
          }
        }
      })(i)
      img.onerror = function () {
        len--
        console.log('fail to load image')
      }
    }
  })
  return def.promise()
}
preloadImg(list, imgs)

// 红队积分柱

function redIntegra () {
  let currentIntegral = $('.integral-1 .integral-count').text()
  let currentMoney = ($('.integral-1 .money-count-1').text())
  let a = Number(currentIntegral)
  if (a >= 10 && a < 50) {
    let redMoney = redTeam.redMoney[0]
    let redMoneyS = redTeam.redMoney[1]
    if (currentMoney === redMoneyS) { $('.integral-1 .money-count-1').text(redMoneyS) } else { $('.integral-1 .money-count-1').text(redMoney) }
    if (a === 10) { $('.integral-1 .block-0').animate({ 'height': '18px' }, 1500) }
    if (a === 20) { $('.integral-1 .block-0').animate({ 'height': '36px' }, 1500) }
    if (a === 30) { $('.integral-1 .block-0').animate({ 'height': '54px' }, 1500) }
    if (a === 40) { $('.integral-1 .block-0').animate({ 'height': '72px' }, 1500) }
    $('.integral-1 .tip-12').fadeOut(2000)
    $('.integral-1 .tip-11').fadeOut(2000)
    $('.integral-1 .tip-10').fadeOut(2000)
    $('.integral-1 .tip-9').fadeOut(2000)
  }
  if (a >= 50 && a < 100) {
    let redMoney = redTeam.redMoney[1]
    let redMoneyS = redTeam.redMoney[2]
    if (currentMoney === redMoneyS) { $('.integral-1 .money-count-1').text(redMoneyS) } else {
      $('.integral-1 .money-count-1').text(redMoney)
      redPacketFirst()
    }
    if (a === 50) { $('.integral-1 .block-0').animate({ 'height': '90px' }, 1500) }
    if (a === 60) { $('.integral-1 .block-0').animate({ 'height': '108px' }, 1500) }
    if (a === 70) { $('.integral-1 .block-0').animate({ 'height': '126px' }, 1500) }
    if (a === 80) { $('.integral-1 .block-0').animate({ 'height': '144px' }, 1500) }
    if (a === 90) { $('.integral-1 .block-0').animate({ 'height': '162px' }, 1500) }
    $('.integral-1 .tip-12').fadeOut(2000)
    $('.integral-1 .tip-11').fadeOut(2000)
    $('.integral-1 .tip-10').fadeOut(2000)
    $('.integral-1 .tip-9').fadeIn(2000)
  }
  if (a >= 100 && a < 150) {
    let redMoney = redTeam.redMoney[2]
    let redMoneyS = redTeam.redMoney[3]
    if (currentMoney === redMoneyS) { $('.integral-1 .money-count-1').text(redMoneyS) } else {
      $('.integral-1 .money-count-1').text(redMoney)
      redPacketSecond()
    }
    if (a === 100) { $('.integral-1 .block-0').animate({ 'height': '180px' }, 1500) }
    if (a === 110) { $('.integral-1 .block-0').animate({ 'height': '198px' }, 1500) }
    if (a === 120) { $('.integral-1 .block-0').animate({ 'height': '216px' }, 1500) }
    if (a === 130) { $('.integral-1 .block-0').animate({ 'height': '234px' }, 1500) }
    if (a === 140) { $('.integral-1 .block-0').animate({ 'height': '252px' }, 1500) }
    $('.integral-1 .tip-12').fadeOut(2000)
    $('.integral-1 .tip-11').fadeOut(2000)
    $('.integral-1 .tip-10').fadeIn(2000)
    $('.integral-1 .tip-9').fadeOut(2000)
  }
  if (a >= 150 && a < 200) {
    let redMoney = redTeam.redMoney[3]
    let redMoneyS = redTeam.redMoney[4]
    if (currentMoney === redMoneyS) { $('.integral-1 .money-count-1').text(redMoneyS) } else {
      $('.integral-1 .money-count-1').text(redMoney)
      redPacketThird()
    }
    if (a === 150) { $('.integral-1 .block-0').animate({ 'height': '270px' }, 1500) }
    if (a === 160) { $('.integral-1 .block-0').animate({ 'height': '288px' }, 1500) }
    if (a === 170) { $('.integral-1 .block-0').animate({ 'height': '306px' }, 1500) }
    if (a === 180) { $('.integral-1 .block-0').animate({ 'height': '324px' }, 1500) }
    if (a === 190) { $('.integral-1 .block-0').animate({ 'height': '342px' }, 1500) }
    $('.integral-1 .tip-12').fadeOut(2000)
    $('.integral-1 .tip-11').fadeIn(2000)
    $('.integral-1 .tip-10').fadeOut(2000)
    $('.integral-1 .tip-9').fadeOut(2000)
  }
  if (a >= 200) {
    let redMoney = redTeam.redMoney[4]
    $('.integral-1 .block-0').animate({ 'height': '360px' }, 1500)
    $('.integral-1 .tip-12').fadeIn(2000)
    $('.integral-1 .tip-11').fadeOut(2000)
    $('.integral-1 .tip-10').fadeOut(2000)
    $('.integral-1 .tip-9').fadeOut(2000)
    $('.integral-1 .money-count-1').text(redMoney)
    redPacketForth()
  }
}

// 蓝队积分柱

function blueIntegra () {
  let currentIntegral = $('.integral-2 .integral-count').text()
  let currentMoney = ($('.integral-2 .money-count-1').text())
  let a = Number(currentIntegral)
  if (a >= 10 && a < 50) {
    let blueMoney = blueTeam.blueMoney[0]
    let blueMoneyS = blueTeam.blueMoney[1]
    if (currentMoney === blueMoneyS) { $('.integral-2 .money-count-1').text(blueMoneyS) } else { $('.integral-2 .money-count-1').text(blueMoney) }
    if (a === 10) { $('.integral-2 .block-0').animate({ 'height': '18px' }, 1500) }
    if (a === 20) { $('.integral-2 .block-0').animate({ 'height': '36px' }, 1500) }
    if (a === 30) { $('.integral-2 .block-0').animate({ 'height': '54px' }, 1500) }
    if (a === 40) { $('.integral-2 .block-0').animate({ 'height': '72px' }, 1500) }
    $('.integral-2 .tip-12').fadeOut(2000)
    $('.integral-2 .tip-11').fadeOut(2000)
    $('.integral-2 .tip-10').fadeOut(2000)
    $('.integral-2 .tip-9').fadeOut(2000)
  }
  if (a >= 50 && a < 100) {
    let blueMoney = blueTeam.blueMoney[1]
    let blueMoneyS = blueTeam.blueMoney[2]
    if (currentMoney === blueMoneyS) { $('.integral-2 .money-count-1').text(blueMoneyS) } else {
      $('.integral-2 .money-count-1').text(blueMoney)
      bluePacketFirst()
    }
    if (a === 50) { $('.integral-2 .block-0').animate({ 'height': '90px' }, 1500) }
    if (a === 60) { $('.integral-2 .block-0').animate({ 'height': '108px' }, 1500) }
    if (a === 70) { $('.integral-2 .block-0').animate({ 'height': '126px' }, 1500) }
    if (a === 80) { $('.integral-2 .block-0').animate({ 'height': '144px' }, 1500) }
    if (a === 90) { $('.integral-2 .block-0').animate({ 'height': '162px' }, 1500) }
    $('.integral-2 .tip-12').fadeOut(2000)
    $('.integral-2 .tip-11').fadeOut(2000)
    $('.integral-2 .tip-10').fadeOut(2000)
    $('.integral-2 .tip-9').fadeIn(2000)
  }
  if (a >= 100 && a < 150) {
    let blueMoney = blueTeam.blueMoney[2]
    let blueMoneyS = blueTeam.blueMoney[3]
    if (currentMoney === blueMoneyS) { $('.integral-2 .money-count-1').text(blueMoneyS) } else {
      $('.integral-2 .money-count-1').text(blueMoney)
      bluePacketSecond()
    }
    if (a === 100) { $('.integral-2 .block-0').animate({ 'height': '180px' }, 1500) }
    if (a === 110) { $('.integral-2 .block-0').animate({ 'height': '198px' }, 1500) }
    if (a === 120) { $('.integral-2 .block-0').animate({ 'height': '216px' }, 1500) }
    if (a === 130) { $('.integral-2 .block-0').animate({ 'height': '234px' }, 1500) }
    if (a === 140) { $('.integral-2 .block-0').animate({ 'height': '252px' }, 1500) }
    $('.integral-2 .tip-12').fadeOut(2000)
    $('.integral-2 .tip-11').fadeOut(2000)
    $('.integral-2 .tip-10').fadeIn(2000)
    $('.integral-2 .tip-9').fadeOut(2000)
  }
  if (a >= 150 && a < 200) {
    let blueMoney = blueTeam.blueMoney[3]
    let blueMoneyS = blueTeam.blueMoney[4]
    if (currentMoney === blueMoneyS) { $('.integral-2 .money-count-1').text(blueMoneyS) } else {
      $('.integral-2 .money-count-1').text(blueMoney)
      bluePacketThird()
    }
    if (a === 150) { $('.integral-2 .block-0').animate({ 'height': '270px' }, 1500) }
    if (a === 160) { $('.integral-2 .block-0').animate({ 'height': '288px' }, 1500) }
    if (a === 170) { $('.integral-2 .block-0').animate({ 'height': '306px' }, 1500) }
    if (a === 180) { $('.integral-2 .block-0').animate({ 'height': '324px' }, 1500) }
    if (a === 190) { $('.integral-2 .block-0').animate({ 'height': '342px' }, 1500) }
    $('.integral-2 .tip-12').fadeOut(2000)
    $('.integral-2 .tip-11').fadeIn(2000)
    $('.integral-2 .tip-10').fadeOut(2000)
    $('.integral-2 .tip-9').fadeOut(2000)
  }
  if (a >= 200) {
    let blueMoney = blueTeam.blueMoney[4]
    $('.integral-2 .block-0').animate({ 'height': '360px' }, 1500)
    $('.integral-2 .tip-12').fadeIn(2000)
    $('.integral-2 .tip-11').fadeOut(2000)
    $('.integral-2 .tip-10').fadeOut(2000)
    $('.integral-2 .tip-9').fadeOut(2000)
    $('.integral-2 .money-count-1').text(blueMoney)
    bluePacketForth()
  }
}

// 红队游戏界面

function getRedMap () {
  preloadImg(list, imgs)
  $('body').css({ 'background': 'url("/public/build/img/activity/annual/bg-2.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
  $('html').css({ 'background': 'url("/public/build/img/activity/annual/bg-2.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
  $('.integral-1').css('opacity', '0.1')
  $('.integral-2').css('opacity', '0.1')
  $('.blue-step').css('opacity', '0.1')
  $('.red-person').css('opacity', '0')
  $('.blue-person').css('opacity', '0')
  $('.all-money').css('opacity', '0')
  $('.red-light').hide()
  $('.center-img').css('opacity', 0).hide()
  $('.center-img').attr('src', '/public/build/img/activity/annual/red-2.png').css({ 'width': '274px' }).show().css('opacity', 1)
  $('.center').css({ 'position': 'absolute', 'top': '156px', 'left': '370px', 'opacity': '1' })
  $('.next').show()
  // $('.end').hide()
  redIntegra()
}

// 蓝队游戏界面
function getBlueMap () {
  preloadImg(list, imgs)
  $('body').css({ 'background': 'url("/public/build/img/activity/annual/bg-2.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
  $('html').css({ 'background': 'url("/public/build/img/activity/annual/bg-2.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
  $('.integral-1').css('opacity', '0.1')
  $('.integral-2').css('opacity', '0.1')
  $('.red-step').css('opacity', '0.1')
  $('.red-person').css('opacity', '0')
  $('.blue-person').css('opacity', '0')
  $('.all-money').css('opacity', '0')
  $('.red-light').hide()
  $('.center-img').css('opacity', 0).hide()
  $('.center-img').attr('src', '/public/build/img/activity/annual/blue-2.png').css({ 'width': '274px' }).show().css('opacity', 1)
  $('.center').css({ 'position': 'absolute', 'top': '156px', 'left': '370px', 'opacity': '1' })
  $('.next').show()
  // $('.end').hide()
  blueIntegra()
}

// 获取当前红队index

function redLight (a) {
  let currentLight = $('.red-person').position()
  let currentLightTop = Math.round(currentLight.top)
  let currentLightLeft = Math.round(currentLight.left)
  let getWhichBlock = getRedIndex(currentLightTop, currentLightLeft)
  let currentIndex = getWhichBlock.num
  for (let i = currentIndex; i < a + currentIndex + 1; i++) {
    if (i === a + currentIndex) {
      redAnimate(i, currentIndex, true)
    } else {
      redAnimate(i, currentIndex, false)
    }
  }
}

// 获取当前蓝队index

function blueLight (a) {
  let currentLight = $('.blue-person').position()
  let currentLightTop = Math.round(currentLight.top)
  let currentLightLeft = Math.round(currentLight.left)
  let getWhichBlock = getblueIndex(currentLightTop, currentLightLeft)
  let currentIndex = getWhichBlock.num
  for (let i = currentIndex; i < a + currentIndex + 1; i++) {
    if (i === a + currentIndex) {
      blueAnimate(i, currentIndex, true)
    } else {
      blueAnimate(i, currentIndex, false)
    }
  }
}

function redAnimate (i, currentIndex, finish) {
  var index = i % 18
  setTimeout(function () {
    $('.step-' + index).addClass('border-red')
    $('.step-' + index).children('span').css('opacity', '1')
    setTimeout(function () {
      if (finish) {
        let gameTip = map[index].gameTip
        let money = map[index].money
        currentAllMoney = currentAllMoney - money
        allMoney = allMoney - money
        setTimeout(function () { $('.integral-1').css('opacity', '1').fadeIn() }, 1500)
        setTimeout(function () { redIntegra() }, 2000)
        setTimeout(function () {
          $('.game-tip').text(gameTip).show().css('padding-top', '392px')
        }, 1000)
        $('#music')[0].play()
      }
      if (!finish) {
        $('.step-' + index).removeClass('border-red')
        $('.step-' + index).children('span').css('opacity', '0.3')
      }
    }, 100 * (i - currentIndex))
  }, 200 * (i - currentIndex))
}

function blueAnimate (i, currentIndex, finish) {
  var index = i % 18
  setTimeout(function () {
    $('.step-' + index).addClass('border-red')
    $('.step-' + index).children('span').css('opacity', '1')
    setTimeout(function () {
      if (finish) {
        let gameTip = map[index].gameTip
        let money = map[index].money
        currentAllMoney = currentAllMoney - money
        allMoney = allMoney - money
        setTimeout(function () { $('.integral-2').css('opacity', '1').fadeIn() }, 1500)
        setTimeout(function () { blueIntegra() }, 2000)
        setTimeout(function () {
          $('.game-tip').text(gameTip).show().css('padding-top', '392px')
        }, 1000)
        $('#music')[0].play()
      }
      if (!finish) {
        $('.step-' + index).removeClass('border-red')
        $('.step-' + index).children('span').css('opacity', '0.3')
      }
    }, 100 * (i - currentIndex))
  }, 200 * (i - currentIndex))
}

// 红队点击按钮

function redClick () {
  preloadImg(list, imgs)
  $('.red-step').children().click(function () {
    getRedMap()
    let stepNum = $(this).index() + 1
    redTeam.stepAll = stepNum + redTeam.stepAll
    let whichblock = redTeam.stepAll % 18
    let getBlock = getBlockIndex(whichblock)
    redTeam.integral = redTeam.integral + getBlock.integral
    $('.integral-1 .integral-count').text(redTeam.integral)
    redLight(stepNum)
    redTeam.top = getBlock.redTop
    redTeam.left = getBlock.redLeft
    $('.red-person').css({ position: 'absolute', 'top': redTeam.top, 'left': redTeam.left, 'z-index': 2 })
  })
}
redClick()

// 蓝队点击按钮

function blueClick () {
  preloadImg(list, imgs)
  $('.blue-step').children().click(function () {
    getBlueMap()
    let stepNum = $(this).index() + 1
    blueTeam.stepAll = stepNum + blueTeam.stepAll
    let whichblock = blueTeam.stepAll % 18
    let getBlock = getBlockIndex(whichblock)
    blueTeam.integral = blueTeam.integral + getBlock.integral
    $('.integral-2 .integral-count').text(blueTeam.integral)
    blueLight(stepNum)
    blueTeam.top = getBlock.blueTop
    blueTeam.left = getBlock.blueLeft
    $('.blue-person').css({ position: 'absolute', 'top': blueTeam.top, 'left': blueTeam.left, 'z-index': 2 })
  })
}
blueClick()

// 下一局

function nextClick () {
  preloadImg(list, imgs)
  $('.next').click(function () {
    $('body').css({ 'background': 'url("/public/build/img/activity/annual/bg.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
    $('html').css({ 'background': 'url("/public/build/img/activity/annual/bg.png") no-repeat', 'background-size': '100% 100%', 'background-attachment': 'fixed' })
    $('.integral-1').css('opacity', '1')
    $('.integral-2').css('opacity', '1')
    $('.blue-step').css('opacity', '1')
    $('.red-step').css('opacity', '1')
    $('.red-person').css('opacity', '1')
    $('.blue-person').css('opacity', '1')
    $('.all-money').css('opacity', '1')
    $('.red-light').show().removeClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/light.png').show()
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/gold.png').css('width', '136px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '230px', 'left': '437px', 'opacity': '0.8' })
    $('.next').hide()
    // $('.end').show()
    $('.game-tip').hide()
    $('.step-run').removeClass('border-red')
    $('.step-run span').css('opacity', '0.3')
    currenyMoney()
    compare()
  })
}
nextClick()

// 意外修改积分

$('.protect-red button').click(function () {
  let count = $('.protect-red .change').val()
  let countIntegral = Number(count)
  $('.integral-1 .integral-count').text(countIntegral)
  redTeam.integral = countIntegral
  $('.protect-red').css('opacity', '0')
  redIntegra()
  let a = Number($('.integral-2 .money-count-1').text().split("'").join(''))
  let b = Number($('.integral-1 .money-count-1').text().split("'").join(''))
  let c = currentAllMoney - b - a
  let d = formatNumber(c)
  $('.all-money').text(d)
})
$('.integral-1 .integral-tip').click(function () {
  $('.protect-red').css('opacity', '1')
})

$('.protect-blue button').click(function () {
  let count = $('.protect-blue .change').val()
  let countIntegral = Number(count)
  $('.integral-2 .integral-count').text(countIntegral)
  blueTeam.integral = countIntegral
  $('.protect-blue').css('opacity', '0')
  blueIntegra()
  let a = Number($('.integral-2 .money-count-1').text().split("'").join(''))
  let b = Number($('.integral-1 .money-count-1').text().split("'").join(''))
  let c = currentAllMoney - b - a
  let d = formatNumber(c)
  $('.all-money').text(d)
})
$('.integral-2 .integral-tip').click(function () {
  $('.protect-blue').css('opacity', '1')
})

// 奇遇

// function compare () {
//   let red = Number($('.integral-1 .integral-count').text())
//   let blue = Number($('.integral-2 .integral-count').text())
//   if (red - blue >= 10000 || blue - red >= 10000) {
//     special()
//     if (red > blue) {
//       $('.special-reward .success').click(function () {
//         blue = blue + 60
//         $('.integral-2 .integral-count').text(blue)
//         blueTeam.integral = blue
//         $('.special-reward').hide()
//         $('#router').fadeIn()
//         setTimeout(function () { blueIntegra() }, 500)
//         setTimeout(function () {
//           let a = Number($('.integral-2 .money-count-1').text().split("'").join(''))
//           let b = Number($('.integral-1 .money-count-1').text().split("'").join(''))
//           let c = currentAllMoney - b - a
//           let d = formatNumber(c)
//           $('.all-money').text(d)
//         }, 1000)
//       })
//       $('.special-reward .failure').click(function () {
//         $('.special-reward').hide()
//         $('#router').fadeIn()
//       })
//     } else {
//       $('.special-reward .success').click(function () {
//         red = red + 60
//         $('.integral-1 .integral-count').text(red)
//         redTeam.integral = red
//         $('.special-reward').hide()
//         $('#router').fadeIn()
//         setTimeout(function () { redIntegra() }, 500)
//         setTimeout(function () {
//           let a = Number($('.integral-2 .money-count-1').text().split("'").join(''))
//           let b = Number($('.integral-1 .money-count-1').text().split("'").join(''))
//           let c = currentAllMoney - b - a
//           let d = formatNumber(c)
//           $('.all-money').text(d)
//         }, 1000)
//       })
//       $('.special-reward .failure').click(function () {
//         $('.special-reward').hide()
//         $('#router').fadeIn()
//       })
//     }
//   }
// }
// function special () {
//   if (flag) {
//     setTimeout(function () { $('#router').fadeOut() }, 1000)
//     setTimeout(function () { $('.special-reward').show() }, 1500)
//     flag = false
//   }
// }

var redFirst = true
var redSecond = true
var redThird = true
var redForth = true

function redPacketFirst () {
  if (redFirst) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/red-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/light.png').show()
    // $('.all-money').text("5'000'000")
    redFirst = false
  }
}
function redPacketSecond () {
  if (redSecond) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/red-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/light.png').show()
    redSecond = false
  }
}
function redPacketThird () {
  if (redThird) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/red-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/light.png').show()
    redThird = false
  }
}
function redPacketForth () {
  if (redForth) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/red-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/light.png').show()
    redForth = false
  }
}

var blueFirst = true
var blueSecond = true
var blueThird = true
var blueForth = true

function bluePacketFirst () {
  if (blueFirst) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/blue-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/blue-light.png').show()
    blueFirst = false
  }
}
function bluePacketSecond () {
  if (blueSecond) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/blue-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/blue-light.png').show()
    blueSecond = false
  }
}
function bluePacketThird () {
  if (blueThird) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/blue-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/blue-light.png').show()
    blueThird = false
  }
}
function bluePacketForth () {
  if (blueForth) {
    $('.center-img').css('opacity', 1).show()
    $('.center-img').attr('src', '/public/build/img/activity/annual/blue-bag.png').css('width', '100px').show().css('opacity', 1)
    $('.center').css({ 'position': 'absolute', 'top': '238px', 'left': '456px' })
    $('.red-light').show().addClass('Rotation')
    $('.red-light img').attr('src', '/public/build/img/activity/annual/blue-light.png').show()
    blueForth = false
  }
}

function theEnd () {
  $('.integral-1 .money-count-1').click(function () {
    $('#router').hide()
    $('.the-end').show()
    $('body').css('background', 'rgba(21,0,49,1)')
    $('html').css('background', 'rgba(21,0,49,1)')
    moneyResult()
    integralPK()
    bartimer()
    setTimeout(function () {
      $('.result-money').show()
      $('.coin-money').show()
      $('.money-img').show()
    }, 3000)
  })
}
theEnd()

function integralPK () {
  let a = Number($('.integral-1 .integral-count').text())
  let b = Number($('.integral-2 .integral-count').text())
  // let c = Math.round((a / (a + b)) * 1000)
  // let d = Math.round((b / (a + b)) * 1000)
  // let e = Number(c)
  // let f = Number(d)
  let g = Math.round((a / (a + b)) * 100) + '%'
  let h = Math.round((b / (a + b)) * 100) + '%'
  // $('.red-bar').width(e)
  // $('.blue-bar').width(f)
  $('.red-bar span').text(g)
  $('.blue-bar span').text(h)
}

function setProcess () {
  let a = Number($('.integral-1 .integral-count').text())
  let b = Number($('.integral-2 .integral-count').text())
  let g = Math.round((a / (a + b)) * 1000)
  let h = Math.round((b / (a + b)) * 1000)
  let i = Math.round($('.red-bar').width())
  let k = Math.round($('.blue-bar').width())
  let j = parseInt(i)
  let l = parseInt(k)
  if (j <= g) {
    if (j === g) { return 0 }
    j = j + 1
    $('.red-bar').width(j)
  } else {
    j = j - 1
    $('.red-bar').width(j)
  }
  if (l < h) {
    if (j === g) { return 0 }
    l = l + 1
    $('.blue-bar').width(l)
  } else {
    l = l - 1
    $('.blue-bar').width(l)
  }
}
function bartimer () {
  setInterval(function () { setProcess() }, 10)
}

function currenyMoney () {
  let redResult = Number($('.integral-1 .money-count-1').text().split("'").join(''))
  let blueResult = Number($('.integral-2 .money-count-1').text().split("'").join(''))
  // currentAllMoney = Number($('.all-money').text().split("'").join(''))
  let now = currentAllMoney - redResult - blueResult
  let nowMoney = formatNumber(now)
  $('.all-money').text(nowMoney)
}
function moneyResult () {
  let redResult = Number($('.integral-1 .money-count-1').text().split("'").join(''))
  let blueResult = Number($('.integral-2 .money-count-1').text().split("'").join(''))
  let endMoney = allMoney - redResult - blueResult
  // let endRedMoney = endMoney + redResult
  // let endBlueMoney = endMoney + blueResult
  let a = Number($('.integral-1 .integral-count').text())
  let b = Number($('.integral-2 .integral-count').text())
  let c = Math.round(((a / (a + b)) * (endMoney) / 48) + (redResult / 48))
  let d = Math.round(((b / (a + b)) * (endMoney) / 48) + (blueResult / 48))
  let e = formatNumber(c)
  let f = formatNumber(d)
  $('.red-result .coin-money').text(e)
  $('.blue-result .coin-money').text(f)
}

function formatNumber (num, precision, separator) {
  var parts
  // 判断是否为数字
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
    // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
    // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
    // 的值变成了 12312312.123456713
    num = Number(num)
    // 处理小数点位数
    num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString()
    // 分离数字的小数部分和整数部分
    parts = num.split('.')
    // 整数部分加[separator]分隔, 借用一个著名的正则表达式
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || "'"))

    return parts.join('.')
  }
  return NaN
}
