function funcao1() {
    alert("Eu sou um alert!");
}

function ReceivingDataChatWoot()
{
    window.addEventListener("message", function (event) {
        if (!isJSONValid(event.data)) {
            return;
        }

        const eventData = JSON.parse(event.data);
    });
}