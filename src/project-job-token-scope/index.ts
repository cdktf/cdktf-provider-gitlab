/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectJobTokenScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or full path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope#project ProjectJobTokenScope#project}
  */
  readonly project: string;
  /**
  * The ID of the project that is in the CI/CD job token inbound allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope#target_project_id ProjectJobTokenScope#target_project_id}
  */
  readonly targetProjectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope gitlab_project_job_token_scope}
*/
export class ProjectJobTokenScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_job_token_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectJobTokenScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectJobTokenScope to import
  * @param importFromId The id of the existing ProjectJobTokenScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectJobTokenScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_job_token_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scope gitlab_project_job_token_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectJobTokenScopeConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectJobTokenScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_job_token_scope',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.1.0',
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
    this._project = config.project;
    this._targetProjectId = config.targetProjectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // target_project_id - computed: false, optional: false, required: true
  private _targetProjectId?: number; 
  public get targetProjectId() {
    return this.getNumberAttribute('target_project_id');
  }
  public set targetProjectId(value: number) {
    this._targetProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectIdInput() {
    return this._targetProjectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      target_project_id: cdktf.numberToTerraform(this._targetProjectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_project_id: {
        value: cdktf.numberToHclTerraform(this._targetProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
