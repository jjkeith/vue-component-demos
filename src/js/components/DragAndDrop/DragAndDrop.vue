<template>
  <div id="drag-and-drop">
    <h1>Drag and Drop Demo</h1>
    <draggable 
      class="card-grid" 
      v-model="list" 
      element="ul" 
      animation="500ms" 
      :options="dragOptions" 
      :move="onMove" 
      @start="isDragging=true" 
      @end="isDragging=false">
      <li v-for="icon in list" :key="icon.order" class="card">
        <span class="badge">{{ icon.order }}</span>
        <i :class="'fas fa-fw fa-6x ' + icon.name"></i>
      </li>
    </draggable>
    <draggable 
      class="slot-grid" 
      v-model="selected" 
      element="ul" 
      animation="500ms" 
      :options="slotOptions" 
      :move="onMove">
      <li class="drag-message" v-if="selected.length < 1">Drag Here</li>
      <li v-for="( icon, index ) in selected" :key="'selected' + index" class="card">
        <span class="badge mod-delete" @click="removeSelection(index)">
          <i class="fas fa-fw fa-times"></i>
        </span>
        <i :class="'fas fa-fw fa-6x ' + icon.name"></i>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
const icons = [ 'fa-hand-spock', 'fa-hand-scissors', 'fa-hand-rock', 'fa-hand-peace', 'fa-hand-paper', 'fa-hand-lizard', ];

export default {
  name: 'drag-and-drop',
  components: {
    draggable
  },
  data() {
    return {
      list: icons.map( (icon, index) => { return { name: icon, order: index+1, fixed: false }}),
      selected: [],
      editable:true,
      isDragging: false,
      delayedDragging:false,
    };
  },
  methods:{
    orderList () {
      this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    removeSelection: function(index) {
      console.log(this.selected);
      this.selected.splice( index, 1 );
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
        clone: true,
        group: { name: 'icons', pull: 'clone', put: false }
        // draggable: '.fas'
      };
    },
    slotOptions () {
      return {
        group: { name: 'icons', pull: false, put: this.selected.length < 6 ? true : false }
      };
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging = true
        return
      }
      this.$nextTick( () => {
        this.delayedDragging = false
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/style';

#drag-and-drop {
  margin: 2rem;
}

.badge {
  @include m-absolute-positioner( 0, null, null, 0 );
  background-color: $brand-color;
  border-radius: 0;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  height: 2.5rem;
  width: 2.25rem;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: left;
}

  .badge.mod-delete {
    background-color: rgba( 0, 0, 0, 0.25 );
    color: $brand-font-color;
    padding: 2px 3px;
    &:hover {
      background-color: $brand-color;
      color: white;
    }
  }

.card-grid,
.slot-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat( 6, 1fr);
  margin-bottom: 2rem;
  min-height: 12rem;
  border: 1px solid rgba( 0, 0, 0, 0.25 );
  padding: 1rem;
  border-radius: 4px;
  position: relative;
}

ul {
  margin: 0;
}

  .card,
  .slot {
    border-radius: 4px;
    color: $brand-font-color;
    width: 10rem;
    position: relative;
  }

.card {
  color: $brand-font-color;
  border: 2px solid $brand-font-color;
  padding: 1rem 1.75rem;

}

.slot {
  color: $brand-color;
  border: 2px solid $brand-color;
  padding: 1.25rem;
}

.drag-message {
  font-size: 6rem;
  width: 100%;
  text-align: center;
  color: rgba( 0, 0, 0, 0.25 );
  font-family: $brand-accent-font;
  @include m-absolute-positioner(0 , 0, null, null);
}

.ghost {
  opacity: 0.5;
}
</style>
