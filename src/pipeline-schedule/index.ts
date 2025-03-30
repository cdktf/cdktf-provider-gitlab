// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The cron (e.g. `0 1 * * *`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}
  */
  readonly cron: string;
  /**
  * The timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * The description of the pipeline schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}
  */
  readonly description: string;
  /**
  * The name or id of the project to add the schedule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}
  */
  readonly project: string;
  /**
  * The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}
  */
  readonly ref: string;
  /**
  * When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}
  */
  readonly takeOwnership?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule gitlab_pipeline_schedule}
*/
export class PipelineSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pipeline_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineSchedule to import
  * @param importFromId The id of the existing PipelineSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_pipeline_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/pipeline_schedule gitlab_pipeline_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_pipeline_schedule',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.10.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._cron = config.cron;
    this._cronTimezone = config.cronTimezone;
    this._description = config.description;
    this._project = config.project;
    this._ref = config.ref;
    this._takeOwnership = config.takeOwnership;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // cron_timezone - computed: true, optional: true, required: false
  private _cronTimezone?: string; 
  public get cronTimezone() {
    return this.getStringAttribute('cron_timezone');
  }
  public set cronTimezone(value: string) {
    this._cronTimezone = value;
  }
  public resetCronTimezone() {
    this._cronTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTimezoneInput() {
    return this._cronTimezone;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getNumberAttribute('owner');
  }

  // pipeline_schedule_id - computed: true, optional: false, required: false
  public get pipelineScheduleId() {
    return this.getNumberAttribute('pipeline_schedule_id');
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

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // take_ownership - computed: true, optional: true, required: false
  private _takeOwnership?: boolean | cdktf.IResolvable; 
  public get takeOwnership() {
    return this.getBooleanAttribute('take_ownership');
  }
  public set takeOwnership(value: boolean | cdktf.IResolvable) {
    this._takeOwnership = value;
  }
  public resetTakeOwnership() {
    this._takeOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeOwnershipInput() {
    return this._takeOwnership;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cron: cdktf.stringToTerraform(this._cron),
      cron_timezone: cdktf.stringToTerraform(this._cronTimezone),
      description: cdktf.stringToTerraform(this._description),
      project: cdktf.stringToTerraform(this._project),
      ref: cdktf.stringToTerraform(this._ref),
      take_ownership: cdktf.booleanToTerraform(this._takeOwnership),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron_timezone: {
        value: cdktf.stringToHclTerraform(this._cronTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take_ownership: {
        value: cdktf.booleanToHclTerraform(this._takeOwnership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
