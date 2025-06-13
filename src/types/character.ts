// Character Card V2 Specification Types
export interface TavernCardV1 {
  name: string
  description: string
  personality: string
  scenario: string
  first_mes: string
  mes_example: string
}

export interface CharacterBook {
  name?: string
  description?: string
  scan_depth?: number
  token_budget?: number
  recursive_scanning?: boolean
  extensions: Record<string, any>
  entries: CharacterBookEntry[]
}

export interface CharacterBookEntry {
  keys: string[]
  content: string
  extensions: Record<string, any>
  enabled: boolean
  insertion_order: number
  case_sensitive?: boolean
  name?: string
  priority?: number
  id?: number
  comment?: string
  selective?: boolean
  secondary_keys?: string[]
  constant?: boolean
  position?: 'before_char' | 'after_char'
}

export interface TavernCardV2 {
  spec: 'chara_card_v2'
  spec_version: '2.0'
  data: {
    name: string
    description: string
    personality: string
    scenario: string
    first_mes: string
    mes_example: string
    creator_notes: string
    system_prompt: string
    post_history_instructions: string
    alternate_greetings: string[]
    character_book?: CharacterBook
    tags: string[]
    creator: string
    character_version: string
    extensions: Record<string, any>
  }
}

export type TavernCard = TavernCardV1 | TavernCardV2

// Extended types for our cognitive architecture
export interface CognitiveProfile {
  personality_matrix: PersonalityMatrix
  emotional_state: EmotionalState
  memory_system: MemorySystem
  reasoning_engine: ReasoningEngine
  learning_parameters: LearningParameters
}

export interface PersonalityMatrix {
  openness: number
  conscientiousness: number
  extraversion: number
  agreeableness: number
  neuroticism: number
  traits: Record<string, number>
}

export interface EmotionalState {
  current_mood: string
  emotional_intensity: number
  emotional_history: EmotionalEvent[]
  triggers: EmotionalTrigger[]
}

export interface EmotionalEvent {
  emotion: string
  intensity: number
  timestamp: number
  context: string
}

export interface EmotionalTrigger {
  pattern: string
  emotion: string
  intensity_modifier: number
}

export interface MemorySystem {
  short_term: MemoryEntry[]
  long_term: MemoryEntry[]
  episodic: EpisodicMemory[]
  semantic: SemanticMemory[]
  working_memory_capacity: number
}

export interface MemoryEntry {
  id: string
  content: string
  importance: number
  timestamp: number
  associations: string[]
  decay_rate: number
}

export interface EpisodicMemory {
  id: string
  event: string
  context: string
  timestamp: number
  emotional_charge: number
  participants: string[]
}

export interface SemanticMemory {
  id: string
  concept: string
  definition: string
  relationships: ConceptRelationship[]
  confidence: number
}

export interface ConceptRelationship {
  target: string
  type: 'is_a' | 'part_of' | 'related_to' | 'causes' | 'opposite_of'
  strength: number
}

export interface ReasoningEngine {
  logic_type: 'probabilistic' | 'fuzzy' | 'classical'
  inference_rules: InferenceRule[]
  confidence_threshold: number
  reasoning_depth: number
}

export interface InferenceRule {
  id: string
  condition: string
  conclusion: string
  confidence: number
  application_count: number
}

export interface LearningParameters {
  learning_rate: number
  adaptation_speed: number
  experience_weight: number
  curiosity_level: number
  exploration_tendency: number
}

// Agent system types
export interface AutonomousAgent {
  id: string
  name: string
  character_id: string
  goals: Goal[]
  current_state: AgentState
  capabilities: Capability[]
  autonomy_level: number
  decision_tree: DecisionNode
}

export interface Goal {
  id: string
  description: string
  priority: number
  deadline?: number
  progress: number
  sub_goals: Goal[]
  status: 'active' | 'completed' | 'paused' | 'cancelled'
}

export interface AgentState {
  current_activity: string
  focus_level: number
  energy_level: number
  confidence: number
  last_action: AgentAction
  environment_awareness: Record<string, any>
}

export interface Capability {
  name: string
  proficiency: number
  description: string
  prerequisites: string[]
  can_learn: boolean
}

export interface DecisionNode {
  id: string
  condition: string
  actions: AgentAction[]
  children: DecisionNode[]
  success_rate: number
}

export interface AgentAction {
  type: string
  parameters: Record<string, any>
  timestamp: number
  result?: ActionResult
}

export interface ActionResult {
  success: boolean
  output: any
  confidence: number
  side_effects: string[]
}

// Enhanced character with cognitive architecture
export interface EnhancedCharacter extends TavernCardV2 {
  cognitive_profile: CognitiveProfile
  agent_config?: AutonomousAgent
  interaction_history: InteractionEvent[]
  performance_metrics: PerformanceMetrics
  created_at: number
  updated_at: number
  version_history: CharacterVersion[]
}

export interface InteractionEvent {
  id: string
  timestamp: number
  type: 'conversation' | 'learning' | 'adaptation' | 'reasoning'
  context: string
  participants: string[]
  outcome: string
  metrics: Record<string, number>
}

export interface PerformanceMetrics {
  response_quality: number
  consistency: number
  engagement: number
  learning_progress: number
  user_satisfaction: number
  conversation_count: number
  average_session_duration: number
}

export interface CharacterVersion {
  version: string
  timestamp: number
  changes: string[]
  performance_delta: Record<string, number>
  rollback_data: any
}

// OpenCog-inspired AtomSpace types
export interface Atom {
  id: string
  type: AtomType
  name?: string
  value?: any
  truth_value: TruthValue
  attention_value: AttentionValue
}

export interface AtomType {
  name: string
  parent?: string
  properties: string[]
}

export interface TruthValue {
  strength: number
  confidence: number
}

export interface AttentionValue {
  short_term_importance: number
  long_term_importance: number
  very_long_term_importance: number
}

export interface Link extends Atom {
  outgoing_set: string[]
  arity: number
}

export interface Node extends Atom {
  incoming_set: string[]
}

// Hypergraph representation
export interface Hypergraph {
  nodes: Map<string, Node>
  links: Map<string, Link>
  indices: HypergraphIndices
}

export interface HypergraphIndices {
  by_type: Map<string, Set<string>>
  by_name: Map<string, Set<string>>
  incoming: Map<string, Set<string>>
  outgoing: Map<string, Set<string>>
}

// Pattern matching types
export interface Pattern {
  id: string
  structure: PatternElement[]
  variables: Variable[]
  conditions: Condition[]
}

export interface PatternElement {
  type: 'atom' | 'variable' | 'wildcard'
  atom_type?: string
  name?: string
  constraints?: Constraint[]
}

export interface Variable {
  name: string
  type?: string
  constraints?: Constraint[]
}

export interface Constraint {
  type: 'type' | 'value' | 'truth_value' | 'attention'
  operator: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'contains'
  value: any
}

export interface Condition {
  type: 'logical' | 'numerical' | 'temporal'
  expression: string
  variables: string[]
}

// PLN (Probabilistic Logic Networks) types
export interface PLNRule {
  id: string
  name: string
  premises: Formula[]
  conclusion: Formula
  strength_formula: string
  confidence_formula: string
}

export interface Formula {
  predicate: string
  arguments: Term[]
  truth_value?: TruthValue
}

export interface Term {
  type: 'variable' | 'constant' | 'function'
  value: string
  arguments?: Term[]
}

export interface InferenceResult {
  conclusion: Formula
  premises: Formula[]
  rule_applied: string
  confidence: number
  explanation: string[]
}