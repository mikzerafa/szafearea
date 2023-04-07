import { ThreeSymptomModel } from "../Enums/three-symptom-model";

export type Symptom = {
  name: string;
  description: string;
  type: ThreeSymptomModel;
};

const SymptomList: Symptom[] = [
  {
    name: "Delusions",
    description: "False beliefs that are not based in reality.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Hallucinations",
    description: "Hearing, seeing, or feeling things that are not really there.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Disorganized speech",
    description: "Difficulty organizing thoughts or expressing them coherently.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Catatonia",
    description: "Unresponsiveness or immobility, or excessive and uncontrollable movement.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Social withdrawal",
    description: "Reduced interest in social interactions or activities, or lack of emotional response.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Apathy",
    description: "Lack of motivation or interest in activities, often accompanied by reduced emotional expression.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Anhedonia",
    description: "Inability to experience pleasure or joy from activities that are normally enjoyable.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Poor memory",
    description: "Difficulty remembering information or events, or impaired ability to learn new things.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Poor attention",
    description: "Difficulty focusing or sustaining attention on tasks or activities.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Impaired decision-making",
    description: "Difficulty making sound decisions, often due to disordered thinking or poor judgment.",
    type: ThreeSymptomModel.Cognitive,
  },

  {
    name: "Incoherent speech",
    description: "Speech that is jumbled, illogical, or difficult to follow.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Executive dysfunction",
    description: "Difficulty with planning, organizing, and initiating tasks.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Lack of motivation",
    description: "Lack of interest or drive to engage in activities or pursue goals.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Reduced emotional expression",
    description: "Limited range or intensity of emotional expression.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Social isolation",
    description: "Withdrawal from social interaction or activities.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Depression",
    description: "Persistent feelings of sadness, hopelessness, or emptiness.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Anxiety",
    description: "Excessive worry, fear, or nervousness.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Sleep disturbances",
    description: "Difficulty falling or staying asleep, or abnormal sleep patterns.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Lack of insight",
    description: "Lack of awareness or understanding of one's illness or its impact on others.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Paranoid ideation",
    description: "Belief that others are plotting against or intending harm.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Suspiciousness",
    description: "Distrust of others, even without evidence or reason.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Agitation",
    description: "Restlessness or irritability.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Self-neglect",
    description: "Failure to attend to one's basic needs, such as hygiene, nutrition, or medical care.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Self-harm",
    description: "Intentional injury or harm to oneself, often as a coping mechanism.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Inappropriate emotional responses",
    description: "Emotional responses that do not match the situation or context.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Impaired abstract reasoning",
    description: "Difficulty understanding or processing abstract concepts or ideas.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Reduced speech output",
    description: "Decreased frequency or amount of speech.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Unusual behavior",
    description: "Behavior that is atypical or deviates from social norms.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Abnormal movements",
    description: "Unusual or involuntary movements or postures.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Lack of emotional responsiveness",
    description: "Inability to express or feel emotions in a normal way.",
    type: ThreeSymptomModel.Negative,
  },

  {
    name: "Perceptual abnormalities",
    description: "Alterations in perception, such as changes in the way things look, sound, feel, taste, or smell.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Thought insertion",
    description: "Belief that one's thoughts are being inserted into one's mind by an external force.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Thought withdrawal",
    description: "Belief that one's thoughts are being taken away by an external force.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Thought broadcasting",
    description: "Belief that one's thoughts are being broadcasted to others.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Ideas of reference",
    description: "Belief that random events or stimuli have personal significance.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Echolalia",
    description: "Repetition of others' words or phrases.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Echopraxia",
    description: "Repetition of others' movements or gestures.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Hyperreligiosity",
    description: "Excessive or extreme preoccupation with religion or religious beliefs.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Avolition",
    description: "Lack of motivation or ability to initiate and complete tasks.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Alogia",
    description: "Reduced speech output or poverty of speech.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Flat affect",
    description: "Lack of emotional expressiveness, often appearing unresponsive or indifferent.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Blunted affect",
    description: "Reduced intensity of emotional expressiveness, often appearing apathetic or disinterested.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Catatonic stupor",
    description: "State of unresponsiveness or immobility, often maintaining a fixed position for extended periods of time.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Catatonic excitement",
    description: "State of excessive and uncontrollable movement, often including repetitive or stereotyped behaviors.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Stereotyped speech",
    description: "Repetitive or ritualistic use of language, often including phrases, rhymes, or neologisms.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Somatic delusions",
    description: "False beliefs about the body, such as that one is infested with parasites or has a serious illness.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Nihilistic delusions",
    description: "Belief that one or the world does not exist, or that nothing matters or has any value.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Erotomanic delusions",
    description: "False belief that another person, often of higher status, is in love with them.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Grandiose delusions",
    description: "Exaggerated sense of one's own importance or abilities.",
    type: ThreeSymptomModel.Positive,
  },

  {
    name: "Jealousy delusions",
    description: "False belief that one's partner is unfaithful or interested in someone else.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Persecutory delusions",
    description: "False belief that one is being targeted or persecuted by others.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Control delusions",
    description: "False belief that one is being controlled by an external force or agency.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Guilt delusions",
    description: "False belief that one has committed a serious or unforgivable offense.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Referential delusions",
    description: "False belief that random events or stimuli are personally relevant or directed towards oneself.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Bizarre delusions",
    description: "Unusual or irrational false beliefs that defy common sense or logic.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Disorganized behavior",
    description: "Unpredictable or inappropriate behavior, often including strange or socially unacceptable actions.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Emotional instability",
    description: "Frequent and intense fluctuations in mood or affect.",
    type: ThreeSymptomModel.Positive,
  },
  {
    name: "Difficulty experiencing pleasure",
    description: "Reduced ability to enjoy or derive pleasure from activities that are normally enjoyable.",
    type: ThreeSymptomModel.Negative,
  },
  {
    name: "Difficulty with working memory",
    description: "Impaired ability to hold and manipulate information in short-term memory.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with long-term memory",
    description: "Impaired ability to store and retrieve information from long-term memory.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with attentional shifting",
    description: "Impaired ability to flexibly shift attention between different tasks or stimuli.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with task switching",
    description: "Impaired ability to switch between different tasks or cognitive processes.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with response inhibition",
    description: "Impaired ability to inhibit or suppress unwanted or inappropriate responses.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with cognitive flexibility",
    description: "Impaired ability to adapt or adjust to changing situational demands or rules.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with mental imagery",
    description: "Impaired ability to create or manipulate mental images or representations.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with mental calculation",
    description: "Impaired ability to perform arithmetic or mathematical calculations.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Difficulty with spatial cognition",
    description: "Impaired ability to perceive or navigate through physical space.",
    type: ThreeSymptomModel.Cognitive,
  },
  {
    name: "Visual hallucinations",
    description: "Seeing things that are not there, such as people, objects, or patterns.",
    type: ThreeSymptomModel.Positive,
  },
];

export default {
  SymptomList,
}
