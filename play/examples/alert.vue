<template>
    <n-alert message="Success Tips" type="success" show-icon :border="false" />
    <n-alert message="Informational Notes" type="info" show-icon />
    <n-alert message="Warning" type="warning" show-icon />
    <n-alert message="Error" type="error" show-icon />
    <br />
    <n-alert
        message="Success Tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        show-icon
    />
    <!-- <n-alert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        show-icon
    />
    <n-alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        show-icon
    />
    <n-alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        show-icon
    /> -->
</template>
