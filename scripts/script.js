let itemCount = 1;

function addItem() {
    const nameSpan = document.createElement("span");
    nameSpan.id = "item-name";
    const name = document.createElement("input");
    name.id = "item-name" + (itemCount + 1);
    name.placeholder = "نام محصول";
    nameSpan.appendChild(name);

    const priceSpan = document.createElement("span");
    priceSpan.id = "item-price";
    const price = document.createElement("input");
    price.id = "item-price" + (itemCount + 1);
    priceSpan.innerHTML = "قیمت";
    priceSpan.appendChild(price);

    const weightSpan = document.createElement("span");
    weightSpan.id = "item-weight";
    const weight = document.createElement("input");
    weight.id = "item-weight" + (itemCount + 1);
    weightSpan.innerHTML = "وزن";
    weightSpan.appendChild(weight);

    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.appendChild(nameSpan);
    itemDiv.appendChild(priceSpan);
    itemDiv.appendChild(weightSpan);

    document.getElementById("items").appendChild(itemDiv);
    itemCount++;
}

function showResult() {
    const resultDoc = document.getElementById("result");
    if (result) {
        resultDoc.replaceChildren();
    }

    const copyButton = document.createElement("button");
    copyButton.innerText = "کپی";
    copyButton.type = "button";

    let totalPrice = 0;

    for (let i = 1; i <= itemCount; i++) {
        let p = document.createElement("p");
        p.className = "item-p";
        p.id = "item-p" + i;

        let name = document.getElementById("item-name" + i);
        let price = document.getElementById("item-price" + i);
        let weight = document.getElementById("item-weight" + i);
        let result = price.value * weight.value;
        totalPrice += result;

        p.innerText = "نام = " + name.value +
            "\nفی = " + price.value +
            "\nوزن = " + weight.value +
            "\nقیمت = " + result.toLocaleString("en-US") +
            "\n";

        document.getElementById("result").appendChild(p);
    }

    let totalPriceP = document.createElement("p");
    totalPriceP.innerText = "قیمت کل: " + totalPrice.toLocaleString("en-US");
    document.getElementById("result").append(totalPriceP);

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(document.getElementById("result").innerText.replace("کپی", "").trim());
            copyButton.innerText = "کپی شد!";
        } catch (error) {
            console.error("خطا در کپی کردن متن:", error);
            copyButton.innerText = "کپی ناموفق بود";
        }
    });
    document.getElementById("result").appendChild(copyButton);

    // TODO: add total price;
}