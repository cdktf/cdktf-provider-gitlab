/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectFreezePeriodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * End of the Freeze Period in cron format (for example, `0 2 * * *`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}
  */
  readonly freezeEnd: string;
  /**
  * Start of the Freeze Period in cron format (for example, `0 1 * * *`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}
  */
  readonly freezeStart: string;
  /**
  * The ID or path of the project to add the freeze period to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period#project ProjectFreezePeriod#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period gitlab_project_freeze_period}
*/
export class ProjectFreezePeriod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_freeze_period";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectFreezePeriod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectFreezePeriod to import
  * @param importFromId The id of the existing ProjectFreezePeriod that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectFreezePeriod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_freeze_period", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_freeze_period gitlab_project_freeze_period} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectFreezePeriodConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectFreezePeriodConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_freeze_period',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.3.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronTimezone = config.cronTimezone;
    this._freezeEnd = config.freezeEnd;
    this._freezeStart = config.freezeStart;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // freeze_end - computed: false, optional: false, required: true
  private _freezeEnd?: string; 
  public get freezeEnd() {
    return this.getStringAttribute('freeze_end');
  }
  public set freezeEnd(value: string) {
    this._freezeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeEndInput() {
    return this._freezeEnd;
  }

  // freeze_start - computed: false, optional: false, required: true
  private _freezeStart?: string; 
  public get freezeStart() {
    return this.getStringAttribute('freeze_start');
  }
  public set freezeStart(value: string) {
    this._freezeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeStartInput() {
    return this._freezeStart;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_timezone: cdktf.stringToTerraform(this._cronTimezone),
      freeze_end: cdktf.stringToTerraform(this._freezeEnd),
      freeze_start: cdktf.stringToTerraform(this._freezeStart),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_timezone: {
        value: cdktf.stringToHclTerraform(this._cronTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeze_end: {
        value: cdktf.stringToHclTerraform(this._freezeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeze_start: {
        value: cdktf.stringToHclTerraform(this._freezeStart),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
