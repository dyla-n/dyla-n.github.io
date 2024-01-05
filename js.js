function convertSeconds(seconds) {
    const days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    const hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    const mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    return `${days} days, ${hrs} hours, ${mnts} minutes, and ${seconds} seconds`;
}
async function a() {
    let battleData = await fetch('https://raw.githubusercontent.com/dyla-n/dyla-n.github.io/main/battle.json')
    let battleStuff = await battleData.json()
    let rssData = await fetch('https://raw.githubusercontent.com/dyla-n/dyla-n.github.io/main/rss.json')
    let rssStuff = await rssData.json()
    let advData = await fetch('https://raw.githubusercontent.com/dyla-n/dyla-n.github.io/main/adv.json')
    let advStuff = await advData.json()
    battleStuff.forEach( e => {
    let name = e.name;
    let level = e.level;
    let bLevel = e.building_level_1;
    let time = convertSeconds(e.time);
    let food = e.need_value_1;
    let wood = e.need_value_2;
    let stone = e.need_value_3;
    let gold =e.need_value_4;

    let div = document.getElementById('aa');
    let content = `
    <div> <t> ‎  </t> </div>
    <div>
    <t> ${name} Level ${level} </t>
    <div>
    <div>
    <t> Academy Level: ${bLevel} </t>
    </div>
    <t> Food: ${food} </t>
    <t> Wood: ${wood} </t>
    <t> Stone: ${stone} </t>
    <t> Gold: ${gold} </t>
    </div>
    <div> 
    <t> Time: ${time} </t>
    </div>
    </div>
    <div> <t>‎   </t> </div>
    `
    div.innerHTML += content
})
    rssStuff.forEach( e => {
            let name = e.name;
            let level = e.level;
            let bLevel = e.building_level_1;
            let time = convertSeconds(e.time);
            let food = e.need_value_1;
            let wood = e.need_value_2;
            let stone = e.need_value_3;
            let gold =e.need_value_4;

            let div = document.getElementById('bb');
            let content = `
            <div> <t> ‎  </t> </div>
            <div>
            <t> ${name} Level ${level} </t>
            <div>
            <div>
            <t> Academy Level: ${bLevel} </t>
            </div>
            <t> Food: ${food} </t>
            <t> Wood: ${wood} </t>
            <t> Stone: ${stone} </t>
            <t> Gold: ${gold} </t>
            </div>
            <div> 
            <t> Time: ${time} </t>
            </div>
            </div>
            <div> <t>‎   </t> </div>
            `
            div.innerHTML += content
    })
    advStuff.forEach( e => {
                let name = e.name;
                let level = e.level;
                let bLevel = e.building_level_1;
                let time = convertSeconds(e.time);
                let food = e.need_value_1;
                let wood = e.need_value_2;
                let stone = e.need_value_3;
                let gold =e.need_value_4;
    
                let div = document.getElementById('cc');
                let content = `
                <div> <t> ‎  </t> </div>
                <div>
                <t> ${name} Level ${level} </t>
                <div>
                <div>
                <t> Academy Level: ${bLevel} </t>
                </div>
                <t> Food: ${food} </t>
                <t> Wood: ${wood} </t>
                <t> Stone: ${stone} </t>
                <t> Gold: ${gold} </t>
                </div>
                <div> 
                <t> Time: ${time} </t>
                </div>
                </div>
                <div> <t>‎   </t> </div>
                `
                div.innerHTML += content
        })
    }
window.onload = a;
