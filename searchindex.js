Search.setIndex({docnames:["api","async-clients","basics","command-line-client","index","install","iocs","mock-records","protocol-compliance","pyepics-compat-client","references","release-notes","servers","sync-client","threading-client"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api.rst","async-clients.rst","basics.rst","command-line-client.rst","index.rst","install.rst","iocs.rst","mock-records.rst","protocol-compliance.rst","pyepics-compat-client.rst","references.rst","release-notes.rst","servers.rst","sync-client.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Beacon":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{clear:[0,3,1,""],client_name:[0,3,1,""],create:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{clear:[0,3,1,""],create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.server.records":{AaiFields:[7,1,1,""],AaoFields:[7,1,1,""],AcalcoutFields:[7,1,1,""],AiFields:[7,1,1,""],AoFields:[7,1,1,""],AsubFields:[7,1,1,""],AsynFields:[7,1,1,""],BiFields:[7,1,1,""],BoFields:[7,1,1,""],BusyFields:[7,1,1,""],CalcFields:[7,1,1,""],CalcoutFields:[7,1,1,""],CompressFields:[7,1,1,""],DfanoutFields:[7,1,1,""],DigitelFields:[7,1,1,""],EpidFields:[7,1,1,""],EventFields:[7,1,1,""],FanoutFields:[7,1,1,""],GensubFields:[7,1,1,""],HistogramFields:[7,1,1,""],LonginFields:[7,1,1,""],LongoutFields:[7,1,1,""],MbbiFields:[7,1,1,""],MbbidirectFields:[7,1,1,""],MbboFields:[7,1,1,""],MbbodirectFields:[7,1,1,""],MotorFields:[7,1,1,""],PermissiveFields:[7,1,1,""],RecordFieldGroup:[7,1,1,""],ScalcoutFields:[7,1,1,""],ScanparmFields:[7,1,1,""],SelFields:[7,1,1,""],SeqFields:[7,1,1,""],SscanFields:[7,1,1,""],SseqFields:[7,1,1,""],StateFields:[7,1,1,""],StringinFields:[7,1,1,""],StringoutFields:[7,1,1,""],SubFields:[7,1,1,""],SubarrayFields:[7,1,1,""],SwaitFields:[7,1,1,""],TableFields:[7,1,1,""],TimestampFields:[7,1,1,""],TransformFields:[7,1,1,""],VmeFields:[7,1,1,""],VsFields:[7,1,1,""],WaveformFields:[7,1,1,""]},"caproto.sync.client":{Subscription:[13,1,1,""],block:[13,4,1,""],interrupt:[13,4,1,""],read:[13,4,1,""],read_write_read:[13,4,1,""],subscribe:[13,4,1,""],write:[13,4,1,""]},"caproto.sync.client.Subscription":{add_callback:[13,3,1,""],block:[13,3,1,""],clear:[13,3,1,""],interrupt:[13,3,1,""],process:[13,3,1,""],remove_callback:[13,3,1,""]},"caproto.threading.client":{Batch:[14,1,1,""],Context:[14,1,1,""],PV:[14,1,1,""],SharedBroadcaster:[14,1,1,""],Subscription:[14,1,1,""],VirtualCircuitManager:[14,1,1,""]},"caproto.threading.client.Batch":{read:[14,3,1,""],write:[14,3,1,""]},"caproto.threading.client.Context":{get_pvs:[14,3,1,""]},"caproto.threading.client.PV":{go_idle:[14,3,1,""],read:[14,3,1,""],subscribe:[14,3,1,""],unsubscribe_all:[14,3,1,""],wait_for_search:[14,3,1,""],write:[14,3,1,""]},"caproto.threading.client.SharedBroadcaster":{get_cached_search_result:[14,3,1,""],received:[14,3,1,""],search:[14,3,1,""],send:[14,3,1,""]},"caproto.threading.client.Subscription":{add_callback:[14,3,1,""],clear:[14,3,1,""],remove_callback:[14,3,1,""]},"caproto.threading.client.VirtualCircuitManager":{events_off:[14,3,1,""],events_on:[14,3,1,""],received:[14,3,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Beacon:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0x1041672b0":6,"0x1041672e8":6,"0x104167320":6,"0x104167358":6,"0x104167550":6,"0x104167588":6,"0x1041675f8":6,"0x10928fe10":6,"0x10928fef0":6,"0x10928ffd0":6,"0x2add732cf708":14,"0x2add73443ac8":13,"250x":9,"abstract":[2,12],"boolean":[0,13,14],"byte":[0,2,3,13,14],"case":[2,3,6,13],"char":[0,3,6],"class":[0,3,6,7,13,14],"default":[0,3,6,11,13,14],"enum":[0,3,13,14],"final":[2,3,10,13,14],"float":[0,3,13,14],"function":[2,3,9,11,13,14],"import":[0,2,5,6,8,9,11,13,14],"int":[0,3,6,11,13,14],"long":[0,3,4,6],"new":[0,2,3,5,6,11,13,14],"return":[0,2,6,11,13,14],"short":11,"switch":0,"true":[0,6,13,14],"try":[2,5,6],"while":[6,11,13,14],Added:11,And:[0,4,6],But:13,For:[0,3,4,5,6,8,9,13,14],GPS:5,IDs:2,Its:[2,4,14],PVs:[2,3,5,6,9,13,14],That:[3,14],The:[1,2,3,4,5,6,7,9,11,12,13,14],There:[2,8,11,13,14],These:[0,2,5,7,10,14],Use:[0,3,6,13],Used:[13,14],Using:[2,4],Will:14,With:0,__init__:0,__main__:6,__name__:6,__repr__:0,__stdin__:6,_broadcast:3,_caproto_pv:9,_circuit:3,aaifield:7,aaofield:7,abandon:[4,13,14],abc:6,abid:[2,11],abl:5,about:[0,4,10,14],abov:[2,4,6],acalcoutfield:7,acceler:4,acceleromet:5,accept:[0,2,3,11,13,14],access:[0,3,5,6,8,9,10,11,12,13,14],access_respons:2,access_right:[0,2,3,11,14],access_rights_callback:[11,14],accessor:11,accessright:[2,3,14],accessrightsrespons:[0,2,3],accident:[13,14],accumul:[13,14],ack:6,ackt:6,across:14,action:14,activ:[13,14],actual:[2,3,9],add:[0,11,13,14],add_callback:[9,13,14],added:[6,14],adding:9,addit:[0,2,3,4,14],addition:3,addr:0,address:[0,2,9,11,14],address_str:0,adel:6,adher:2,advantag:9,advis:4,affect:2,affirm:0,after:14,again:[2,3,13,14],against:[0,2,4,5,8,9,11],aggreg:14,aifield:7,aim:8,air:3,alarm:[0,3,6],alarmsever:3,alarmstatu:3,alia:13,all:[0,2,3,4,5,6,8,11,13,14],alloc:0,allow:[0,3,11],alon:5,along:[6,11],alongsid:14,alreadi:[2,3,6,14],also:[0,2,4,5,6,10,13],alst:6,alwai:[0,2,13],analog:[1,6],analogu:8,analysi:6,andrew:10,ani:[0,2,3,5,6,8,13,14],announc:[0,2],anoth:[0,2,3,4,5,13,14],another_func:14,ansi:[0,3],answer:[0,2],anyth:[2,13],aoff:6,aofield:7,apart:9,api:[2,4,9,11,12],app:5,append:[13,14],appendix:4,appli:14,applic:[4,13,14],approach:[13,14],appropri:0,apt:[4,5],arbitrari:14,architectur:4,archiv:3,arguabl:[1,11],argument:[0,3,4,5,6,8,13,14],around:[1,4,6],arr:[8,11],arrai:[0,2,3,4,5,6,11,13,14],array_pad:3,arriv:[2,13,14],asg:6,asid:2,ask:[2,3,14],aslo:6,aspect:9,assign:[0,6,14],associ:6,assum:3,asubfield:7,async:[1,5,6],async_get:6,async_lib:6,asynchron:[2,4,11],asyncio:[5,6,11,12],asynfield:7,atexit:6,attempt:11,attr:6,attr_separ:6,attribut:[0,3,13,14],authent:2,author:[4,9,12],auto:[2,6,7],autogener:6,automat:[0,6,8,14],avail:[2,3,5,6,13,14],avoid:[8,11,13,14],await:[0,6,14],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:[4,5,6,8,11,14],background:[13,14],backlog:14,backward:3,base:[3,4,6,8,10,11],basi:6,basic:[0,4],batch:[8,9,11],batteri:4,battl:4,bcast:0,bcast_socket:2,beacon:[0,11],beacon_id:0,beamlin:6,beazlei:10,becaus:[2,5,9,13,14],becom:2,bee:4,beej:10,been:[0,2,3,4,6,8,11,13],beer:4,befor:[0,2,3,6,11,13,14],begin:[2,14],behav:13,behavior:[6,11],behind:6,being:[0,6,14],below:[3,6,11,13,14],benchmark:4,best:[4,11],better:[2,4],between:[0,2,3,6,11,13],beyond:14,bifield:7,big:2,bigendianstructur:[0,13,14],bin:6,binari:[3,10],bit:[5,14],block:[8,11,13,14],blog:10,bofield:7,bookkeep:4,both:[0,2,9,14],bottom:6,branch:10,brew:4,bridg:[9,13,14],brief:9,bring:5,broad:4,broadcast:[2,4,14],broke:11,bsd:4,buffer:[0,13,14],buffers_to_send:[0,2],bug:6,build:[4,5],built:[0,4,5,12,14],builtin:2,bulk:[9,14],busyfield:7,button:5,bytearrai:2,bytes_receiv:2,bytes_recv:14,bytes_to_send:[0,2],byteslik:0,cach:[3,8,13,14],caget:[3,5,8,9],calcfield:7,calcoutfield:7,call:[0,2,6,9,13,14],callabl:[13,14],callback:[6,9,11,13,14],callback_count:3,caller:0,camonitor:[3,8],can:[0,1,2,3,4,5,6,9,11,13,14],cancel:[6,14],cannot:13,capabl:6,caproto:[0,1,2,7,8,9,11,12,13,14],caproto_io:5,caproto_skip_motorsim_test:5,caproto_string_encod:0,caprotoerror:0,caprotokeyerror:0,captur:[5,13],caput:[3,5,8,9,13],care:2,carefulli:14,carepeat:3,casever:[0,2,3,6,13,14],castatu:0,castatuscod:[0,2,3,6,13,14],cat:13,catv:11,caus:[6,11,14],cb_id:13,certain:0,chain:6,chan:2,chang:[0,2,12,14],channel:[3,6,8,9,10,11,12,13,14],channel_st:[9,14],channeldata:6,channeltyp:[0,2,3,6,11,13,14],channnel:0,check:[0,2,3,13],chnage:0,choic:[4,5,6,9],choos:2,cid:[0,2,3],circ:0,circuit:[0,2,3,8,9,11,13,14],circuit_manag:14,circuit_st:[9,14],circuitst:0,class_nam:[0,3],claus:4,clean:[2,11],cleanup:11,clear:[0,2,4,13,14],clear_callback:9,clearchannelrequest:[0,2,3],clearchannelrespons:[0,2],clearchannelresposn:0,clever:4,cli:11,click:0,client:[0,4,5,6,10,11],client_address:[0,3],client_nam:[0,2,14],clientchannel:[0,2],clientnamerequest:[0,2,3],clog:2,clone:5,close:[0,11,14],code:[0,2,3,4,6,7,9,10,11,12,13,14],code_with_sever:[0,2,3,6,13,14],collabor:6,collect:[13,14],color:[0,3],color_log:0,color_log_handl:0,com:[0,5],combin:[3,5],come:[2,9,13,14],command:[2,4,5,6,13,14],commandlin:[6,11],common:[7,11,13],commonli:5,commun:[0,2,4],compani:4,companion:0,comparison:2,compat:[3,4,11],competit:9,complet:[0,2,3,4,5,6,8,9,13,14],complianc:4,compliant:6,complic:13,compon:[11,14],compos:[2,6],compound:0,comprehens:[3,9],compressfield:7,comput:[5,6],concept:[2,6,10],conceptu:1,concurr:[4,8,11,12,13,14],conda:[4,5],condens:2,configur:[0,2,6,8,11,14],confirm:[0,3,13,14],conflat:11,confusingli:6,congest:0,connect:[0,2,3,6,8,9,11],connection_callback:11,connection_state_callback:14,consist:[0,4,9,11],constant:4,construct:[13,14],contain:[6,11],context:[0,6,9,11,13,14],contigu:[4,13,14],continu:[11,14],contribut:3,contributor:9,control:[0,2,3,4,5,8,9,12,13,14],conveni:[0,2,4,5,6,13,14],convention:2,convert:0,cooper:4,copi:[2,4,13,14],core:[4,11],correct:11,correctli:8,correspond:0,cost:4,costli:[13,14],could:[2,6,8,11],count:[0,2,4,13,14],counterpart:3,coupl:[6,14],cours:[0,4,6],cover:6,coverag:8,creat:[0,5,6,13,14],create_chan_respons:2,create_connect:2,create_fail:0,createchanrequest:[0,2,3],createchanrespons:[0,2,3,11],createchfailrespons:[0,11],creation:[0,14],critic:11,ctrl:[3,6,11,13],ctrl_char:0,ctrl_doubl:[0,3],ctrl_enum:0,ctrl_float:0,ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[0,6,14],ctype:[0,4,13,14],curio:[1,5,6,11,12],current:[0,2,3,11,13,14],current_raw_valu:6,custom_writ:6,customwrit:6,daemon:[3,6],dallan:3,daniel:3,data:[2,3,4,6,8,11,13,14],data_count:[0,2,3,6,11,13,14],data_typ:[0,2,3,6,13,14],databas:[0,7],datagram:[0,2,3,9],date:3,david:10,davidsav:[10,11],dbe:8,dbe_alarm:0,dbe_properti:0,dbe_valu:0,dbnd:8,dbr:[0,8],dbr_ctrl_float:3,dbr_time_doubl:0,debug:[0,3,4,6,13],declar:11,declin:14,decompos:6,decor:6,def:[2,6,9,13,14],default_prefix:6,default_protocol_vers:0,defens:4,defin:[6,9,11,13,14],defunct:[0,2,3,6,13,14],delimit:3,demo:[2,3,9,13,14],demonstr:[2,4,6,14],depend:[4,5,6],deprec:[0,8,13,14],depth:10,dequ:2,desc:6,describ:[0,13],descript:[0,2,3,6,13,14],descriptor:[6,11],design:[0,1,2,4,6,9,13],desir:0,detail:[0,2,4,6,11],detect:3,detector:6,determin:2,determinist:14,develop:[1,4,6,10,12],devic:[4,5,6],dfanoutfield:7,dict:6,dictionari:14,did:[2,11],differ:[2,4,9,11,12],differenti:11,digitelfield:7,direct:0,directli:[0,2,4,5,12,13,14],directori:6,disa:6,discard:14,disconnect:[0,14],discuss:11,disp:6,displai:[3,6,11,14],diss:6,distribut:4,disv:6,doc:5,docstr:14,document:[4,5,9,10,11,12],doe:[0,2,3,8,11,14],doesn:2,dog:13,doing:[0,2,3],don:[2,6],done:[2,6],dot:[3,13,14],doubl:[0,2,3,13,14],doucment:9,down:6,driver:6,drop:[3,4,9],drown:[8,11],dtyp:6,dtype:[0,6],durat:[3,13],dure:14,each:[0,2,3,6,13,14],easi:[2,4,6,7],easier:[2,3,6],easili:5,eca_newconn:0,eca_norm:[2,3,6,13,14],echo:[0,6],echorequest:0,echorespons:0,effect:[3,14],effici:[4,8,9,11,13,14],effort:4,effortlessli:4,egu:6,eguf:6,egul:6,either:[2,11,14],element:[0,2],elid:9,els:6,embodi:4,emploi:4,encapsul:[0,2,6,9,13,14],encapul:0,encod:[0,2,4,6],end:[0,2],endian:2,enforc:[8,11],engin:[4,5,6],ensur:2,entir:[9,11],entri:[4,6],enumer:0,env:6,environ:[0,2,3,5,6,8,11],eoff:6,epic:[0,2,3,4,5,6,7,8,9,10,11,13,14],epics_bas:5,epics_ca:8,epics_ca_addr_list:2,epics_ca_auto_addr_list:2,epics_ca_repeater_port:3,epidfield:7,equival:[0,2,14],era:4,err:5,error:0,error_messag:0,errorrespons:[0,13],escap:[3,13],eslo:6,establish:[4,9],etc:[2,4,5,14],evan:10,even:[3,4],event:[0,3,6,13],eventaddrequest:[0,2,14],eventaddrespons:[0,2],eventcancelrequest:[0,2],eventcancelrespons:[0,2,11],eventfield:7,events_off:14,events_on:14,eventsoff:[8,11],eventsoffrequest:0,eventson:[8,11],eventsonrequest:0,ever:9,everi:[0,2,4,6,8,9],evnt:6,exactli:0,exampl:[0,2,4,5,7,9,11,13,14],except:[4,6],exchang:14,exec:5,execut:[3,5,11,14],exercis:[4,9],exist:[2,4,6,9,11,14],exit:[2,3,6,11,14],expand:0,expect:[0,2,5,11,13,14],experi:[2,11],experiment:[1,4,11,12],explicitli:[11,14],explor:[1,4,6],expos:[0,6],express:5,extend:6,extra:6,extract_address:2,extrem:[3,5],f_getfl:6,f_setfl:6,facil:4,facilit:2,fail:[0,11],failur:[0,11,13],fairli:11,fall:5,fals:[0,2,3,6,13,14],fan:[13,14],fanoutfield:7,faq:6,fashion:0,fast:4,faster:14,fcntl:6,featur:[1,8],field:[0,3,6,7,13,14],field_spec:6,file:[11,14],filenam:6,fileno:6,fill:[0,2,6],filter:[5,8,11],find:5,fine:2,finish:14,first:[0,2,4,5,13,14],fixed_random:6,flat:6,flavor:2,flnk:6,flow:8,follow:[2,3,6,11,14],force_int_enum:13,forev:[6,13],fork:11,format:3,formerli:11,formul:14,formula:10,found:[2,3,14],four:13,framework:[0,1,4],fresh:[0,2,13,14],friendli:[4,6,9,13,14],from:[0,2,3,4,5,7,8,9,11,13,14],full:[9,13],fulli:0,fun:4,func:[13,14],functool:14,fund:4,futur:[1,6,11,13,14],gain:11,garbag:[13,14],gener:[0,2,3,6,7,11,13],gensubfield:7,get:[5,6,8,9,13,14],get_address_list:2,get_cached_search_result:14,get_pv:[6,9,14],get_random:6,gethostnam:14,getlogg:[0,6,14],getpass:[0,14],getter:6,getus:[0,14],git:5,github:[5,8,11],give:[0,2,5,9],given:[0,2,6,8,14],go_idl:14,goal:[3,12],going:2,got:14,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,grab:6,graphic:[0,3,13,14],greater:14,group1:6,group2:6,group3:6,group3_prefix:6,group4:6,group:6,guarante:[13,14],guid:10,h11:[4,10],had:14,hand:[9,14],handi:[4,14],handl:[0,2,4,6,10,14],handler:0,handshak:[11,14],hard:0,hardwar:[4,6],has:[0,2,3,4,6,8,9,11,13,14],have:[1,2,4,5,6,11,13,14],header:[0,13,14],heartbeat:[0,2],heavi:9,heavili:[1,11],help:[2,3,6],here:[0,2,6,12,14],hex:2,hhsv:6,high:[0,2,6,8,11,13,14],higher:[2,3],highest:[0,3,13,14],highli:11,hihi:6,histogramfield:7,histori:4,hobbi:4,hold:[13,14],homebrew:[4,5,10],hopr:6,host:[0,2],host_nam:[0,2,14],hostnamerequest:[0,2,3],hour:3,how:[0,2,4,11,13],howev:[1,6],hsv:6,html:5,http:5,human:[4,6,13,14],hurrai:2,hyst:6,iOS:4,icanon:6,idempot:13,identif:0,identifi:0,idl:[0,9],ifi:6,ignor:[2,8,14],illeg:[0,2],imagin:6,immedi:[13,14],implement:[0,1,2,3,4,5,6,7,8,9,11,12,13,14],impli:3,implicitli:[6,14],incident:2,includ:[0,2,3,4,5,6,8,9,11,12,14],incom:[2,13],increas:14,increment:0,inde:13,indefinit:[3,13],independ:2,indic:0,indispens:4,individu:[0,2,14],industri:4,ineffici:13,infer:13,info:[0,3],inform:[0,5,14],inherit:[0,14],init:6,initi:[0,2,4,6,11,13,14],inline_styl:6,inlinestyleioc:6,inp:6,input:[0,4,12,13],insensit:3,insid:0,inspir:4,instal:[2,3,4,11],instanc:[0,6,14],instanti:[0,2,6,14],instead:[0,4,9,11,13,14],int32:6,integ:[0,2,3,6,13,14],intend:[3,4,6,9,13],interact:[0,6,12,13],interest:[1,2,4,6,10,12],interfac:[2,6,8,11,13],intermedi:[5,13,14],intern:[0,2,13,14],interpret:[2,3,4],interrupt:[11,13],introspect:4,invalid:6,invoc:3,invok:6,involv:3,io_interrupt:6,ioc:[2,3,4,5,7,9,11,12,13,14],ioc_arg_pars:6,ioc_exampl:[2,3,4,5,6,9,13,14],ioc_opt:6,ioerror:6,ioid:[0,2,3,6,13,14],iointerruptioc:6,ipad:5,iphon:5,isatti:6,isn:3,issu:[1,3,8,11,14],item:6,iter:[0,4,6,13,14],its:[0,2,3,4,5,6,8,11,13,14],itself:[2,4],job:2,johnson:10,json:6,juggl:2,just:[2,4,6,9,11,13,14],kah:4,keep:[0,4],kei:[0,6],ken:10,kenneth:10,keyboard:6,keyerror:[0,14],keypress:6,keystrok:6,keyword:13,kill:11,kind:4,klauer:5,know:[0,6,14],known:[1,11,14],kwarg:[6,9],label:3,laboratori:4,lack:[1,11],lalm:6,lambda:[13,14],larg:[4,9,14],late:14,latenc:[8,11],later:[13,14],latin:0,lauer:10,launch:[5,6],layer:[0,4],layout:7,lbrk:6,lcnt:6,lead:9,learn:4,least:[1,2,13],len:[13,14],length:[0,3,11],let:[0,2,3,6,13,14],level:[0,2,9,11,12,13,14],leverag:9,lib:[5,6],libca:9,librari:[2,6,12],licens:4,lifetim:14,lightweight:5,like:[0,2,3,6,11,13,14],limit:[0,14],line:[5,6,13,14],link:7,linr:6,linux:4,list:[0,2,3,4,6,11,13,14],listen:[2,3,6],littl:[8,11],llsv:6,load:[0,8,11,13,14],local:3,localhost:2,localprotocolerror:[0,2],locat:2,log:[0,3,4,6,9,11,14],logger:[4,6],logger_nam:0,lolo:6,longinfield:7,longoutfield:7,look:[0,2,6],loop:6,lopr:6,lost:0,low:[0,2,6,8,11,12,13,14],lower:9,lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,3,13,14],lsv:6,lyric:2,macbook:3,machin:[2,4,6],macroifiednam:6,made:14,mai:[0,2,4,6,8,9,10,11,13,14],main:[6,9],maintain:[0,4],make:[2,3,5,6,7,9,11,13,14],maker:4,manag:[0,14],mani:[0,4,5,6,8,11,13,14],manual:[0,2,5,14],mask:[0,2,3,8,13,14],match:[0,2,5,13,14],matrix:[2,10],matter:14,max_length:6,max_work:[11,14],maxim:[0,14],maximum:[3,11],mbbidirectfield:7,mbbifield:7,mbbodirectfield:7,mbbofield:7,mdel:6,mean:[0,2,5],mechan:8,medium:11,meet:4,member:14,memori:[4,13,14],memoryview:2,mere:[13,14],messag:[0,2,3,4,6,8,11,13,14],messagehead:[0,13,14],metadata:[0,2,3,6,13,14],method:[0,2,4,5,6,13,14],michael:[10,11],microsecond:11,middl:13,might:[2,13],mini_beamlin:11,minim:[4,14],minut:3,mirror:6,miss:14,mit:4,mix:6,mixtur:14,mlst:6,mock:4,mock_record:6,mocking_record:6,mode:[3,5],model:4,modifi:6,modul:[1,5,9,14],monitor:[6,8,11],more:[0,2,3,4,5,8,9,11,13,14],most:[1,4,8,14],motorfield:7,motorsim:[5,10],move:3,much:[0,2],multipl:[2,3,4,8,11,13,14],must:[0,2,6,13,14],must_clos:0,my_beamlin:6,my_custom_prefix:6,my_func:14,my_writ:6,mypvgroup:6,mysubgroup:6,name:[0,2,3,5,9,11,13,14],narrow:0,nativ:[0,2,3,6,13,14],native_data_count:[0,13],native_data_typ:0,natur:14,navig:5,ndarrai:[0,2,4,13,14],necessari:[2,4,5,14],need:[0,2,3,4,12,13],need_data:0,neg:0,neo:2,nerd:4,nest:6,netifac:5,network:[0,2,4,5,9,10,14],never:14,new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,new_value_callback:6,newattr:6,next:[2,3,6,13,14],nice:6,no_alarm:3,no_repli:0,none:[0,2,3,6,13,14],normal:[2,3,6,13,14],note:[0,6,9,13,14],notfoundrespons:0,notic:[0,2,13,14],notif:[0,3,13],notifc:0,notifi:[0,3,6,13,14],notion:13,now:[2,3,4,6,9,11,13,14],nsev:6,nsl:5,nsta:6,num_bytes_need:0,number:[0,3,4,5,6,9,11,13,14],numer:3,numpi:[0,2,4,5,11,13,14],o_nonblock:6,obei:2,object:[2,4,6,9,13,14],observ:6,obtain:[0,3],obviou:0,obvious:13,occasion:9,occur:14,off:[0,6,8,11],old:[2,3,8],older:11,oldflag:6,oldterm:6,omit:11,onc:[2,13,14],one:[0,2,3,4,6,8,9,11,13,14],ones:[2,11,14],onli:[0,3,4,5,6,13,14],onto:[13,14],opaqu:0,open:[0,2,5,6],oper:[11,13,14],oppos:9,optim:13,option:[0,2,3,4,5,6,10,13,14],oraw:6,order:[0,13,14],ordereddict:6,organ:4,origin:[0,1],original_request:0,osx:[4,10],other:[0,2,4,5,6,8,11,13,14],our:[0,2,3,4,6],our_rol:[0,2],out:[0,2,6,8,9,11,12,13,14],outgo:2,output:[0,2,3,4,11,12],outsid:[6,14],over:[0,2,4,11,13,14],overal:14,overflow:10,overload:2,owes:4,own:[4,8],pack:0,packag:[3,4,5],packet:[0,9],pact:6,pad:[0,3],pai:4,paramet:[0,2,6,11,13,14],parameter1:[0,13,14],parameter2:[0,13,14],parent:6,pariti:[1,8,11],pars:[0,2,3,10],part:[0,14],partial:14,particl:4,particular:[2,3,12,13,14],pass:[0,2,5,6,11,13,14],path:[3,6],pathlib:6,pattern:[2,4,5],payload:[2,4],payload_s:[0,13,14],peer:[0,2],per:[0,5,6,8,11,14],perform:[4,8,11,13,14],period:[3,6,13,14],permiss:2,permissivefield:7,persist:14,pha:6,physic:4,pick:6,pini:6,pip:4,pitfal:14,place:3,placeholder1:6,placeholder2:6,plai:[0,2,5],plain_log_handl:0,platform:[2,6],plugin:10,point:[4,6,13,14],poke:1,polic:2,popul:14,port:[0,2,3,8,13,14],portabl:[4,9],posit:[3,13,14],possibl:[3,6,8,14],post:10,pprint:6,prec:6,precis:[3,6],prefix:[6,7],press:6,previou:2,previous:[6,11],principl:4,print:[6,9,11,13,14],prio:6,prior:14,priorit:[0,8,11],prioriti:[0,2,3,8,9,13,14],proc:6,process:[0,2,3,6,9,11,13,14],process_command:[0,2],processs:14,produc:14,program:[4,10],programmat:4,progress:[11,14],project:[4,10],prolif:[8,11],promptli:[13,14],pronounc:4,propag:[0,6],properli:[2,11,14],properti:3,protcol:10,proto:4,protocol:[0,2,6,10,14],protocol_vers:0,protocolerror:0,provid:[0,2,3,6,9,13,14],pull:9,purchas:5,pure:2,purpos:3,put:[4,6,8,9,11,13,14],put_ack:3,put_ackt:3,putf:6,putter:6,pv_name:[3,6,9,13],pva:6,pvdb:6,pvfunction:6,pvgroup:6,pvproperti:[6,11],pvpropertyinteg:6,pvpropertyintegerro:6,pvpropertystringro:6,pvs:[3,4,6,9,14],pvspec:6,pyepic:[4,10,11],pyepics_compat:9,pytest:5,python3:[2,3,4,5,6,9,13,14],python:[0,3,5,7,8,9,10,11,12,13,14],pythonista:5,queri:[0,3],queu:[8,11],queue:[0,6],quick:2,quickli:11,quiet:3,quota:[8,11],rais:[0,2,6,14],randint:6,random_int:6,random_str:6,random_walk:[0,2,3,6,9,13,14],randomwalkioc:6,randstr:6,rang:2,rare:[2,14],raspberrypi:4,rate:[6,11],rather:[0,5,6,9,14],rational:4,raw:[2,13,14],rbv:6,reactiv:[13,14],read:[0,3,4],read_data_typ:13,read_from_bytestream:0,read_write_read:13,readabl:6,readi:[0,4],readnotifyrequest:[0,2,3,13,14],readnotifyrespons:[0,2,3,6,13,14],readrequest:[0,13,14],readrespons:[0,8,13],readsyncrequest:0,reagan:4,realli:2,rebroadcast:2,recal:[2,13],receipt:[0,13,14],receiv:[0,2,3,4,6,9,13,14],recent:14,recommend:[9,11],reconnect:[8,14],record:[0,4],record_like1:6,record_typ:6,recordfieldgroup:7,recordlik:6,recordlike1:6,recordlike2:6,recordmockingioc:6,recv:[0,2,14],recv_address:2,recvfrom:2,redi:6,redo:14,reduc:14,redundantli:13,refer:[0,3,4,5,6,7,8,11,12,13,14],reflect:13,regist:[0,3,6,13,14],registr:0,registration_retry_tim:14,registri:[13,14],relat:[3,4,13],releas:[1,4],reli:[4,5,6,11],reliabl:4,remot:0,remoteprotocolerror:[0,2],remov:[11,13,14],remove_callback:[13,14],repeat:[0,13],repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,2,3],replac:[3,4,9],repli:[0,11],report:[0,2],repositori:5,repres:[0,9,14],represent:[13,14],repsons:13,req:2,request:[0,2,3,5,8,9,11,13],requir:[0,2,4,5,6,14],res:[13,14],reset:6,reset_termin:6,resolv:0,resourc:[4,10],respect:[0,1,8,11,14],respond:[0,11],respons:[0,2,3,9,11,13,14],rest:9,restart:5,restor:0,result:[3,13,14],results_queu:14,resum:0,retriev:[3,13],retval:6,reus:[2,6],reusabl:4,revers:2,review:6,revis:[1,11],reward:4,richer:3,right:[0,2,5],robust:4,roff:6,role:[0,2],roll:8,root:4,rpc_function:6,rpro:6,rtyp:6,rule:2,run:[2,3,4,5,6,7,9,11,13,14],run_opt:6,run_test:5,runawai:11,rval:6,safe:[3,14],sai:[2,4],said:4,same:[0,2,4,5,8,13,14],sampl:9,san:[2,4,10],sandwich:13,satisfi:13,save:14,saw:6,scalar:[0,3,11],scalcoutfield:7,scan:[6,11],scanparmfield:7,schedul:[8,14],scientist:[4,6],scratch:4,script:5,sdi:6,search:[0,3,8,11,14],search_respons:2,searches_pend:[9,14],searchrequest:[0,2,3,11,14],searchrespons:[0,2],second:[2,3,6,13,14],section:[2,6,11],secur:2,see:[0,2,3,4,5,6,7,8,9,11,12,13,14],seen:[0,6],select:[13,14],select_backend:5,selector:[8,14],self:6,selfield:7,semant:6,send:[0,2,3,6,8,11,13,14],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:2,sendto:2,sent:[0,2,3,4,6,11,14],sentinel:0,separ:[2,3,4,5,6,9,13,14],seqfield:7,sequenti:[0,14],serach:2,seri:3,serial:[3,6],serv:[0,2,5,6],server:[0,2,3,4,5,7,9,10,11,13,14],server_port:0,serverchannel:0,serverdisconnrespons:0,servic:[6,14],set:[2,3,4,5,6,11,13,14],setlevel:[0,14],sever:[0,2,3,4,5,6,11,13,14],sevr:6,share:4,sharedbroadcast:14,shell:[2,3,5,9,13,14],shim:9,shorthand:8,shot:14,should:[0,2,3,5,11,13,14],show:[2,3,6],shut:6,sid:[0,2,3],side:[0,6,11],sigint:[11,13],signal:[6,13],signatur:[11,13,14],silenc:14,silent:[13,14],silo:6,sim:6,similar:[3,6],similarli:[0,6],siml:6,simm:6,simpl:[0,2,4,5],simpleioc:6,simpli:6,simplic:13,simplifi:4,simul:6,sinc:[0,3,8],singl:[0,2,6,14],siol:6,site:5,size:11,skip:5,sleep:[6,9],slide:10,slow:[8,11],slower:[11,14],small:[5,11],smoo:6,snip:[3,6],sock:2,socket:[0,2,4,6,10,11,13,14],softioc:5,some:[0,1,2,3,4,5,6,9,11,13,14],someth:[0,4],somewhat:[2,3,6],sort:0,sourc:[0,5,7,10,11,12,13,14],space:[2,3,14],spawn:[3,13],speak:[4,6,11],spec:[0,10,11,13],special:4,specif:[0,2,3,6,8,13,14],specifi:[0,2,3,9,14],speech:5,speed:9,speedup:9,spell:2,spin:6,sscanfield:7,sseqfield:7,stabl:11,stack:[9,10],stackoverflow:6,stai:14,stale:14,standard:[0,3,4,5,6,13,14],star:4,start:[0,2,3,4,5,6,9,13,14],start_io_interrupt_monitor:6,startup:[3,6,11],stash:[2,5,14],stash_result:14,stat:6,state:[2,4,9,13,14],statefield:7,statu:[0,2,3,6,13,14],stdin:6,stdout:5,steadi:11,steer:4,step:[2,6,9],still:[0,1,2,3,12,14],stipul:13,stop:[6,13],store:[5,6,13,14],stori:2,str:[0,6,13,14],straightforward:11,strateg:4,strategi:4,stream:0,string:[0,3,6,13,14],string_encod:0,stringinfield:7,stringoutfield:7,struct:0,structur:[0,4,6,13,14],sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:[0,3],sub1:13,sub2:13,sub:[13,14],sub_dt:13,sub_x:13,subarrayfield:7,subfield:7,subgroup4:6,subject:12,subpackag:6,subscrib:[0,3,6,9],subscript:[0,2,8,9,11,13,14],subscriptionid:[0,2],subscriptiontyp:[0,13,14],subsequ:14,substitut:6,success:[0,2,3,6,13,14],successfulli:13,succinct:[2,4],succinctli:2,suffici:13,suggest:11,suit:[4,9],suitabl:4,summari:8,superset:3,support:[0,2,3,4,5,9,11,13,14],suppos:14,suppress:3,supsens:14,sure:6,surpris:[13,14],suspend:14,suspens:8,sval:6,swaitfield:7,sync:[8,13],synchron:[2,4,5,11],synchrotron:4,syntax:[8,14],sys:6,system:[0,2,4,11],tab:3,tablefield:7,take:[0,6,8,13],talk:[2,3,9,10,13,14],tap:5,target:[0,6],task:[6,8,11],tcgetattr:6,tcp:[0,2,9,11,14],tcsaflush:6,tcsanow:6,tcsetattr:6,tech:10,telescop:4,tell:[0,6],temp:6,temp_path:6,temporari:8,temporarili:[0,14],term:[0,2,4],termin:[3,4,6],termio:6,ters:3,test:[0,4,5,8,9,11],text:5,than:[6,9,13,14],thank:6,thei:[0,1,3,4,5,6,11,13,14],them:[0,1,2,6,9,13,14],therefor:[13,14],thi:[0,2,3,4,5,6,8,10,11,13,14],thing:[2,6],think:[0,14],thoroughli:11,those:[2,4,6,14],thread:[1,4,5,6,9,11,13],threader:14,threadpool:11,threadsafequeu:6,three:[3,11,12,13],threshold:14,through:[0,5],thu:14,time:[0,2,3,4,6,9,13,14],time_char:0,time_doubl:0,time_enum:0,time_float:0,time_int:0,time_long:0,time_str:0,timedelta:3,timeout:[3,13,14],timeouterror:14,timestamp:3,timestampfield:7,tmp:6,todo:6,togeth:[0,2],token:[3,13,14],too:[0,2],tool:[4,6],toolkit:4,top:[9,13],touch:14,toward:6,tpro:6,track:[0,2,14],tracker:8,trade:[8,11],traffic:[2,10],transact:0,transformfield:7,translat:2,transmit:[0,2],transpar:14,transport:[2,4,14],tri:0,triag:[13,14],trick:4,trigger:6,trio:[1,5,6,11,12],tse:6,tsel:6,tty:6,tune:10,tupl:[0,2,13],turn:[0,14],tutori:4,twice:14,twist:10,two:[0,2,6,9,14],txt:5,type:[2,3,4,6,8,13,14],typic:2,typo:11,udf:6,udp:[0,2,9,11,14],udp_sock:2,ugprad:11,uint8:6,unansw:[8,14],uncoupl:6,under:[0,4,8,11,13,14],underli:[9,13,14],understand:[4,6],uniqu:[0,2,14],unit:[3,4],unless:[2,5,13],unlik:14,unlimit:[0,3,14],unpack:3,unsubscrib:[0,2],unsubscribe_al:14,until:[2,14],unus:[0,14],updat:[0,3,6,8,11,13,14],upgrad:13,upon:14,upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,usag:[3,6,7,9,11],use:[0,2,3,4,5,6,9,11,13,14],used:[0,2,3,4,6,13,14],useful:[0,4,5,6,10,13,14],user:[0,2,4,6,9,11,13,14],uses:[0,13,14],using:[0,1,2,3,4,5,6,8,9,10,11,13,14],usr:6,usual:[0,6],util:[2,3,11,13],val:6,valid:[0,2],valu:[0,3,4,6,9,11,13,14],valuabl:6,valueerror:[6,14],variabl:[0,2,3,5,8],variant:3,variou:[0,4,14],verbos:[3,4,5,9,11,14],veri:[1,11,13],verifi:[2,4,5],version:[0,2,3,4,5,8,11],version_respons:2,versionrequest:[0,2,3],versionrespons:[0,2,3],vestigi:3,via:[2,3,5,6,11,14],view:[0,3,6,13,14],violat:0,virtual:[0,2,3,13,14],virtualcircuit:[2,4,14],virtualcircuitmanag:14,virtualciruit:0,visual:3,vmefield:7,vsfield:7,vvv:3,wai:[0,2,6,13,14],wait:[3,4,6,13,14],wait_for_search:14,want:[2,4,5,9,13,14],war:4,warn:[3,14],watch:2,waveformfield:7,weak:[13,14],web:6,welcom:3,well:[0,4,5,9,13],were:[4,10,11,13,14],what:[0,2,4,6,13],when:[0,2,4,8,11,13,14],whenev:[6,13,14],where:[0,6,14],wherea:[6,9],wherein:11,whether:0,which:[0,2,3,4,6,11,13,14],whichev:[3,6],who:[4,6],whose:14,why:[2,4,9],wide:3,wifi:5,win32:6,window:4,wire:[2,4],wireshark:10,wish:13,within:14,without:[0,14],word:[2,4],work:[0,2,5,6,8,13,14],worker:14,world:[4,6],worthwhil:8,would:[4,9,13],wrap:4,wrapper:9,writabl:6,write:[0,3,4,11,12],write_data_typ:13,write_respons:13,writenotifyrequest:[0,2],writenotifyrespons:[0,2,6,13,14],writerequest:0,written:[9,13],wrong:11,wrote:6,x00:[2,13,14],x00random_walk:2,x01:[2,13,14],x05:2,x06:[2,13,14],x08:[13,14],x0f:[13,14],x10:2,x11:2,x18:2,x7f:2,x_pv:9,xf0:14,xf31id:6,yes:2,yet:[0,3,12,13,14],you:[0,2,4,5,6,9,10,13],your:[0,3,4,5,12,14],zero:[4,14]},titles:["Core API Documentation","Asynchronous Clients","Writing Your Own Channel Access Client","Command-Line Client","caproto: a pure-Python Channel Access protocol library","Install Caproto","Input-Output Controllers (IOCs)","Mock Records","Details of our Protocol Compliance for CA Nerds","Pyepics-Compatible Client","References","Release History","Servers","Synchronous Client","Threading Client"],titleterms:{"break":11,"function":6,"try":4,Not:4,The:0,Use:4,Using:[5,6],access:[2,4],acknowledg:4,api:[0,3,13,14],asynchron:1,basic:2,batch:14,big:4,bookkeep:2,broadcast:0,bug:11,caproto:[3,4,5,6],chang:11,channel:[0,2,4],client:[1,2,3,8,9,13,14],close:2,command:[0,3,8],compat:9,complianc:[8,11],connect:[13,14],constant:0,content:[0,4],control:6,core:[0,8],creat:2,custom:6,data:0,debug:14,demonstr:9,detail:8,develop:5,document:[0,3,13,14],event:[2,14],exampl:6,except:0,featur:11,file:6,fix:11,four:4,from:6,get:3,handl:13,histori:11,iOS:5,idl:14,improv:11,inlin:6,input:6,instal:5,interrupt:6,ioc:6,librari:4,line:[3,4,8],logger:[0,14],machin:0,macro:6,minim:5,mock:[6,7],monitor:[3,13,14],more:6,name:6,nerd:8,object:0,off:14,our:8,output:6,own:2,payload:0,pip:5,protocol:[4,8,11],pure:4,put:3,pyepic:9,python:[4,6],random:6,read:[2,6,13,14],reason:4,record:[6,7],refer:10,regist:2,releas:11,repeat:[2,3],request:14,rpc:6,search:2,server:[6,8,12],simpl:6,simplifi:2,special:0,state:0,stateless:13,statist:4,style:6,subgroup:6,subscrib:[2,13,14],support:8,synchron:[8,13],thi:9,thread:[8,14],tutori:[3,13,14],type:0,updat:2,valu:2,virtualcircuit:0,vital:4,walk:6,what:9,when:6,why:6,write:[2,6,13,14],written:6,your:2}})