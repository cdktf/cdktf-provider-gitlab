/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIntegrationPipelinesEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#branches_to_be_notified ProjectIntegrationPipelinesEmail#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#id ProjectIntegrationPipelinesEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notify only broken pipelines. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#notify_only_broken_pipelines ProjectIntegrationPipelinesEmail#notify_only_broken_pipelines}
  */
  readonly notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#project ProjectIntegrationPipelinesEmail#project}
  */
  readonly project: string;
  /**
  * ) email addresses where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#recipients ProjectIntegrationPipelinesEmail#recipients}
  */
  readonly recipients: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email gitlab_project_integration_pipelines_email}
*/
export class ProjectIntegrationPipelinesEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_integration_pipelines_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIntegrationPipelinesEmail to import
  * @param importFromId The id of the existing ProjectIntegrationPipelinesEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIntegrationPipelinesEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_integration_pipelines_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_integration_pipelines_email gitlab_project_integration_pipelines_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIntegrationPipelinesEmailConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIntegrationPipelinesEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_integration_pipelines_email',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.5.0',
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
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._id = config.id;
    this._notifyOnlyBrokenPipelines = config.notifyOnlyBrokenPipelines;
    this._project = config.project;
    this._recipients = config.recipients;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches_to_be_notified - computed: false, optional: true, required: false
  private _branchesToBeNotified?: string; 
  public get branchesToBeNotified() {
    return this.getStringAttribute('branches_to_be_notified');
  }
  public set branchesToBeNotified(value: string) {
    this._branchesToBeNotified = value;
  }
  public resetBranchesToBeNotified() {
    this._branchesToBeNotified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesToBeNotifiedInput() {
    return this._branchesToBeNotified;
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

  // notify_only_broken_pipelines - computed: false, optional: true, required: false
  private _notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable; 
  public get notifyOnlyBrokenPipelines() {
    return this.getBooleanAttribute('notify_only_broken_pipelines');
  }
  public set notifyOnlyBrokenPipelines(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyBrokenPipelines = value;
  }
  public resetNotifyOnlyBrokenPipelines() {
    this._notifyOnlyBrokenPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyBrokenPipelinesInput() {
    return this._notifyOnlyBrokenPipelines;
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

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branches_to_be_notified: cdktf.stringToTerraform(this._branchesToBeNotified),
      id: cdktf.stringToTerraform(this._id),
      notify_only_broken_pipelines: cdktf.booleanToTerraform(this._notifyOnlyBrokenPipelines),
      project: cdktf.stringToTerraform(this._project),
      recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipients),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branches_to_be_notified: {
        value: cdktf.stringToHclTerraform(this._branchesToBeNotified),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_only_broken_pipelines: {
        value: cdktf.booleanToHclTerraform(this._notifyOnlyBrokenPipelines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
