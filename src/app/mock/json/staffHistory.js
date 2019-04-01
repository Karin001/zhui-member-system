[
    {
        projectId: 'XXX',
        projectName: 'XXX',
        projectStartTime: '2033-11-11',
        projectEndTime: '',//默认数组第一个数据是正在进行的项目，所以没有endTime
        projectDate: [
            {
                "date": "2019-01",
                "projectMonthData": [
                    {
                        "monthDay": "1",//日历必须跟真实日历一样完整，缺一天都不行
                        "weekDay": "2",
                        "status": "on",
                        "isRest": false,
                        "askForLeave": {
                            "start":'12:32',
                            "end":'14:32',
                            "time":'2'
                        },
                        "diary":{
                            "title":'xxxxx',
                            "content":'xxxxx'
                        },
                        "overtime":{
                            "start":'12:32',
                            "end":'14:32',
                            "time":'2'
                        }
                    }
                ]
            }
        ]
    }
]