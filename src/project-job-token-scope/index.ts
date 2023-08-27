/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/project_job_token_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectJobTokenScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or full path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/project_job_token_scope#project ProjectJobTokenScope#project}
  */
  readonly project: string;
  /**
  * The ID of the project that is in the CI/CD job token inbound allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/project_job_token_scope#target_project_id ProjectJobTokenScope#target_project_id}
  */
  readonly targetProjectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/project_job_token_scope gitlab_project_job_token_scope}
*/
export class ProjectJobTokenScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_job_token_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/project_job_token_scope gitlab_project_job_token_scope} Resource
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
        providerVersion: '16.3.0',
        providerVersionConstraint: '~> 16.0'
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
}