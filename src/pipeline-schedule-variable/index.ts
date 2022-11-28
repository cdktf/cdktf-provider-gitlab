// https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineScheduleVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable#id PipelineScheduleVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable#key PipelineScheduleVariable#key}
  */
  readonly key: string;
  /**
  * The id of the pipeline schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable#pipeline_schedule_id PipelineScheduleVariable#pipeline_schedule_id}
  */
  readonly pipelineScheduleId: number;
  /**
  * The id of the project to add the schedule to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable#project PipelineScheduleVariable#project}
  */
  readonly project: string;
  /**
  * Value of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable#value PipelineScheduleVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable gitlab_pipeline_schedule_variable}
*/
export class PipelineScheduleVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pipeline_schedule_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/pipeline_schedule_variable gitlab_pipeline_schedule_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineScheduleVariableConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineScheduleVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_pipeline_schedule_variable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.20.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._key = config.key;
    this._pipelineScheduleId = config.pipelineScheduleId;
    this._project = config.project;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pipeline_schedule_id - computed: false, optional: false, required: true
  private _pipelineScheduleId?: number; 
  public get pipelineScheduleId() {
    return this.getNumberAttribute('pipeline_schedule_id');
  }
  public set pipelineScheduleId(value: number) {
    this._pipelineScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineScheduleIdInput() {
    return this._pipelineScheduleId;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      pipeline_schedule_id: cdktf.numberToTerraform(this._pipelineScheduleId),
      project: cdktf.stringToTerraform(this._project),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
