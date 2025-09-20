# `projectIntegrationMicrosoftTeams` Submodule <a name="`projectIntegrationMicrosoftTeams` Submodule" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationMicrosoftTeams <a name="ProjectIntegrationMicrosoftTeams" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams gitlab_project_integration_microsoft_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

projectintegrationmicrosoftteams.NewProjectIntegrationMicrosoftTeams(scope Construct, id *string, config ProjectIntegrationMicrosoftTeamsConfig) ProjectIntegrationMicrosoftTeams
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig">ProjectIntegrationMicrosoftTeamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig">ProjectIntegrationMicrosoftTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents"></a>

```go
func ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents"></a>

```go
func ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents"></a>

```go
func ResetIssuesEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents"></a>

```go
func ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines"></a>

```go
func ResetNotifyOnlyBrokenPipelines()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents"></a>

```go
func ResetPipelineEvents()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents"></a>

```go
func ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

projectintegrationmicrosoftteams.ProjectIntegrationMicrosoftTeams_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

projectintegrationmicrosoftteams.ProjectIntegrationMicrosoftTeams_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

projectintegrationmicrosoftteams.ProjectIntegrationMicrosoftTeams_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

projectintegrationmicrosoftteams.ProjectIntegrationMicrosoftTeams_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectIntegrationMicrosoftTeams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectIntegrationMicrosoftTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationMicrosoftTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput">NoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput"></a>

```go
func ConfidentialIssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput"></a>

```go
func ConfidentialNoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput"></a>

```go
func IssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput"></a>

```go
func NoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput"></a>

```go
func NotifyOnlyBrokenPipelinesInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput"></a>

```go
func PipelineEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput"></a>

```go
func WikiPageEventsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents"></a>

```go
func ConfidentialIssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents"></a>

```go
func ConfidentialNoteEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents"></a>

```go
func IssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents"></a>

```go
func NoteEvents() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines"></a>

```go
func NotifyOnlyBrokenPipelines() interface{}
```

- *Type:* interface{}

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents"></a>

```go
func PipelineEvents() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents"></a>

```go
func WikiPageEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationMicrosoftTeamsConfig <a name="ProjectIntegrationMicrosoftTeamsConfig" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectintegrationmicrosoftteams"

&projectintegrationmicrosoftteams.ProjectIntegrationMicrosoftTeamsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Webhook: *string,
	BranchesToBeNotified: *string,
	ConfidentialIssuesEvents: interface{},
	ConfidentialNoteEvents: interface{},
	Id: *string,
	IssuesEvents: interface{},
	MergeRequestsEvents: interface{},
	NoteEvents: interface{},
	NotifyOnlyBrokenPipelines: interface{},
	PipelineEvents: interface{},
	PushEvents: interface{},
	TagPushEvents: interface{},
	WikiPageEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook">Webhook</a></code> | <code>*string</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#project ProjectIntegrationMicrosoftTeams#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#webhook ProjectIntegrationMicrosoftTeams#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#branches_to_be_notified ProjectIntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents"></a>

```go
ConfidentialIssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#confidential_issues_events ProjectIntegrationMicrosoftTeams#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents"></a>

```go
ConfidentialNoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#confidential_note_events ProjectIntegrationMicrosoftTeams#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents"></a>

```go
IssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#issues_events ProjectIntegrationMicrosoftTeams#issues_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#merge_requests_events ProjectIntegrationMicrosoftTeams#merge_requests_events}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents"></a>

```go
NoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#note_events ProjectIntegrationMicrosoftTeams#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines"></a>

```go
NotifyOnlyBrokenPipelines interface{}
```

- *Type:* interface{}

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#notify_only_broken_pipelines ProjectIntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents"></a>

```go
PipelineEvents interface{}
```

- *Type:* interface{}

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#pipeline_events ProjectIntegrationMicrosoftTeams#pipeline_events}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#push_events ProjectIntegrationMicrosoftTeams#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#tag_push_events ProjectIntegrationMicrosoftTeams#tag_push_events}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents"></a>

```go
WikiPageEvents interface{}
```

- *Type:* interface{}

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_microsoft_teams#wiki_page_events ProjectIntegrationMicrosoftTeams#wiki_page_events}

---



