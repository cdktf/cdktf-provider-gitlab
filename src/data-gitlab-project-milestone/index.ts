/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectMilestoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone#id DataGitlabProjectMilestone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance-wide ID of the project’s milestone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone#milestone_id DataGitlabProjectMilestone#milestone_id}
  */
  readonly milestoneId: number;
  /**
  * The ID or URL-encoded path of the project owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone#project DataGitlabProjectMilestone#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone gitlab_project_milestone}
*/
export class DataGitlabProjectMilestone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_milestone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectMilestone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectMilestone to import
  * @param importFromId The id of the existing DataGitlabProjectMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectMilestone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_milestone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/project_milestone gitlab_project_milestone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectMilestoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectMilestoneConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_milestone',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.11.0',
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
    this._id = config.id;
    this._milestoneId = config.milestoneId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

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

  // iid - computed: true, optional: false, required: false
  public get iid() {
    return this.getNumberAttribute('iid');
  }

  // milestone_id - computed: false, optional: false, required: true
  private _milestoneId?: number; 
  public get milestoneId() {
    return this.getNumberAttribute('milestone_id');
  }
  public set milestoneId(value: number) {
    this._milestoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get milestoneIdInput() {
    return this._milestoneId;
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      milestone_id: cdktf.numberToTerraform(this._milestoneId),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      milestone_id: {
        value: cdktf.numberToHclTerraform(this._milestoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
