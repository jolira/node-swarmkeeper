function Keeper(id, seeds, transport, options) {
    this.id = id;
    this.seeds = seeds;
    this.transport = transport;
    this.options = options || {};
}

module.exports=function(id, seeds, transport, options){
  return new Keeper(id, seeds, transport, options);
};
