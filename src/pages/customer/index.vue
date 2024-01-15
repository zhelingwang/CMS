<template>
    <a-card>
        <a-flex wrap="wrap" align="center">
            <h2 style="margin: 0">客户</h2>
            <a-flex justify="flex-end" style="flex: 1">
                <a-input-search ref="searchInput" v-model:value="formState.keyword" placeholder="input search text"
                    enter-button @search="onSearch" style="width: 300px;" />
            </a-flex>
            <a-button type="link" @click="() => moreSearch = !moreSearch">
                <template #icon>
                    <template v-if="moreSearch">
                        <UpOutlined :style="{ fontSize: '12px' }" />
                    </template>
                    <template v-else>
                        <DownOutlined :style="{ fontSize: '12px' }" />
                    </template>
                </template>
                高级搜索
            </a-button>
        </a-flex>

        <Transition name="fade">
            <a-card class="mt20 grayBg" v-show="moreSearch">
                <a-form ref="formRef" :model="formState" @finish="onFinish">
                    <a-row style="justify-content: space-between;">
                        <a-col :span="7">
                            <a-form-item label="编号" name="id">
                                <a-input v-model:value="formState.id" placeholder="input placeholder" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="7">
                            <a-form-item label="状态" name="state">
                                <a-select placeholder="Select state" v-model:value="formState.state" :options="options"
                                    @change="handleChange">
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="日期范围" name="range">
                                <a-range-picker v-model:value="formState.range" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="24" style="text-align: right">
                            <a-button type="primary" html-type="submit">Search</a-button>
                            <a-button style="margin: 0 8px"
                                @click="() => { formRef.resetFields(); formState.keyword = '' }">Clear</a-button>
                        </a-col>
                    </a-row>
                </a-form>
            </a-card>
        </Transition>

        <a-card class="mt20">
            <a-table :columns="columns" :data-source="data">
                <template #headerCell="{ column }">
                    <template v-if="column.key === 'name'">
                        <span><smile-outlined /> {{ column.title }}</span>
                    </template>
                </template>

                <template #bodyCell="{ text, column, record }">
                    <template v-if="column.key === 'name'">
                        <a>{{ text }}</a>
                    </template>
                    <template v-if="column.dataIndex == 'robotStatus'">
                        <a-tag :color="ROBOTSTATUS[text].color">
                            {{ ROBOTSTATUS[text].label }}
                        </a-tag>
                    </template>
                    <template v-if="column.dataIndex == 'createdTime'">
                        {{ format(text) }}
                    </template>
                </template>
            </a-table>
        </a-card>
    </a-card>
</template>

<script setup>
import { UpOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons-vue'
const formRef = ref()
// 关键词搜索
const searchInput = ref(null)
const onSearch = (v) => formState.keyword = v
// 表达
const formState = reactive({
    keyword: '',
    id: '',
    state: null,
    range: []
})

const options = ref([
    {
        value: 1,
        label: 'online',
    },
    {
        value: 0,
        label: 'offline',
    },
    {
        value: -1,
        label: 'unActive'
    }
]);
const handleChange = (val) => {
    formState.state = val
}
const moreSearch = ref(false)
const onFinish = (values) => {
    console.log('values from form: ', values);
    console.log('formState: ', formState);
};

// 表格
const columns = [
    {
        title: '序列号',
        dataIndex: 'factoryNum',
        key: 'factoryNum',
    },
    {
        title: '机器人名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '使用类型',
        dataIndex: 'useType',
        key: 'useType',
    },
    {
        title: '型号',
        dataIndex: 'robotModel',
        key: 'robotModel',
    },
    {
        title: '当前版本',
        dataIndex: 'systemVersion',
        key: 'systemVersion',
    },
    {
        title: '在线状态',
        dataIndex: 'robotStatus',
        key: 'robotStatus',
    },
    {
        title: '关联企业号',
        dataIndex: 'enterpriseId',
        key: 'enterpriseId',
    },
    {
        title: '生产时间',
        dataIndex: 'createdTime',
        key: 'createdTime',
    }
]
const ROBOTSTATUS = {
    1: { label: '在线', color: 'success' },
    2: { label: '离线', color: 'default' },
    3: { label: '未激活', color: 'pink' },
    4: { label: '未关联', color: 'error' }
}
const data = [
    {
        "id": "a6943764744edd",
        "factoryNum": "BA0001UBT30000103",
        "name": "2号Car",
        "useType": 1,
        "createdTime": 1695347750151,
        "enterpriseId": "Lyong",
        "robotModel": "CADEBOT-L100",
        "systemVersion": "1.0.28-1.0.26",
        "robotStatus": 1
    },
    {
        "id": "1745706202399850496",
        "factoryNum": "DAQ005UBT30000214",
        "name": "XCAD.101.AC6AA32B5F47",
        "useType": 3,
        "createdTime": 1705043766951,
        "enterpriseId": "TEST",
        "robotModel": "CADEBOT-L100",
        "systemVersion": "1.1.21",
        "robotStatus": 1
    },
    {
        "id": "1745663570109874176",
        "factoryNum": "DAQ005UBT30000218",
        "name": "云平台专用机器人-0218",
        "useType": 1,
        "createdTime": 1705033602615,
        "enterpriseId": "TEST",
        "robotModel": "CADEBOT-L100",
        "systemVersion": "1.1.21",
        "robotStatus": 1,
    },
    {
        "id": "1745328741120032768",
        "factoryNum": "DAQ015ABC30000028",
        "name": "XCAD.101.38839A831552",
        "useType": 3,
        "createdTime": 1704953773150,
        "enterpriseId": "TEST001",
        "robotModel": "CADEBOT-L100",
        "systemVersion": "1.1.21",
        "robotStatus": 2
    },
    {
        "id": "1742446889676775424",
        "factoryNum": "DAQ005UBT30000002",
        "name": "品秀的002机器",
        "useType": 1,
        "createdTime": 1704266686233,
        "enterpriseId": "TEST002",
        "robotModel": "CADEBOT-L100",
        "systemVersion": "1.1.6",
        "robotStatus": 2
    },
    {
        "id": "1740333355115421696",
        "factoryNum": "DAQ003UBT30000026",
        "name": "XCAD.101.38839A8314FE",
        "useType": null,
        "createdTime": 1703762780335,
        "enterpriseId": null,
        "robotModel": "CADEBOT-L100",
        "systemVersion": null,
        "robotStatus": 4
    },
    {
        "id": "1739625693969063936",
        "factoryNum": "DAQ003UBT300000100",
        "name": "XCAD.101.38839A831603",
        "useType": null,
        "createdTime": 1703594060750,
        "enterpriseId": null,
        "robotModel": "CADEBOT-L100",
        "systemVersion": null,
        "robotStatus": 4
    }
];
const format = (timestamp) => dayjs(timestamp).format('YYYY/MM/DD')

onMounted(() => {
    searchInput.value.focus()
})

</script>

<style lang="less" scoped>
.mt20 {
    margin-top: 20px;
}

.grayBg {
    background-color: #f5f5f5;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>