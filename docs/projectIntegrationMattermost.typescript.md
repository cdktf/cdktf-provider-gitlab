# `projectIntegrationMattermost` Submodule <a name="`projectIntegrationMattermost` Submodule" id="@cdktf/provider-gitlab.projectIntegrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationMattermost <a name="ProjectIntegrationMattermost" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost gitlab_project_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

new projectIntegrationMattermost.ProjectIntegrationMattermost(scope: Construct, id: string, config: ProjectIntegrationMattermostConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig">ProjectIntegrationMattermostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig">ProjectIntegrationMattermostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssueChannel">resetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteChannel">resetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssueChannel">resetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestChannel">resetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteChannel">resetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNotifyOnlyBrokenPipelines">resetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineChannel">resetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushChannel">resetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushChannel">resetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageChannel">resetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetBranchesToBeNotified"></a>

```typescript
public resetBranchesToBeNotified(): void
```

##### `resetConfidentialIssueChannel` <a name="resetConfidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssueChannel"></a>

```typescript
public resetConfidentialIssueChannel(): void
```

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssuesEvents"></a>

```typescript
public resetConfidentialIssuesEvents(): void
```

##### `resetConfidentialNoteChannel` <a name="resetConfidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteChannel"></a>

```typescript
public resetConfidentialNoteChannel(): void
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteEvents"></a>

```typescript
public resetConfidentialNoteEvents(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssueChannel` <a name="resetIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssueChannel"></a>

```typescript
public resetIssueChannel(): void
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssuesEvents"></a>

```typescript
public resetIssuesEvents(): void
```

##### `resetMergeRequestChannel` <a name="resetMergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestChannel"></a>

```typescript
public resetMergeRequestChannel(): void
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestsEvents"></a>

```typescript
public resetMergeRequestsEvents(): void
```

##### `resetNoteChannel` <a name="resetNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteChannel"></a>

```typescript
public resetNoteChannel(): void
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteEvents"></a>

```typescript
public resetNoteEvents(): void
```

##### `resetNotifyOnlyBrokenPipelines` <a name="resetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```typescript
public resetNotifyOnlyBrokenPipelines(): void
```

##### `resetPipelineChannel` <a name="resetPipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineChannel"></a>

```typescript
public resetPipelineChannel(): void
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineEvents"></a>

```typescript
public resetPipelineEvents(): void
```

##### `resetPushChannel` <a name="resetPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushChannel"></a>

```typescript
public resetPushChannel(): void
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushEvents"></a>

```typescript
public resetPushEvents(): void
```

##### `resetTagPushChannel` <a name="resetTagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushChannel"></a>

```typescript
public resetTagPushChannel(): void
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushEvents"></a>

```typescript
public resetTagPushEvents(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWikiPageChannel` <a name="resetWikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageChannel"></a>

```typescript
public resetWikiPageChannel(): void
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageEvents"></a>

```typescript
public resetWikiPageEvents(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationMattermost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannelInput">confidentialIssueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannelInput">confidentialNoteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannelInput">issueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEventsInput">issuesEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannelInput">mergeRequestChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannelInput">noteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEventsInput">noteEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">notifyOnlyBrokenPipelinesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannelInput">pipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannelInput">pushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEventsInput">pushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannelInput">tagPushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannelInput">wikiPageChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannel">issueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEvents">issuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannel">noteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEvents">noteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEvents">pipelineEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannel">pushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannel">tagPushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannel">wikiPageChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEvents">wikiPageEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```typescript
public readonly branchesToBeNotifiedInput: string;
```

- *Type:* string

---

##### `confidentialIssueChannelInput`<sup>Optional</sup> <a name="confidentialIssueChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannelInput"></a>

```typescript
public readonly confidentialIssueChannelInput: string;
```

- *Type:* string

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```typescript
public readonly confidentialIssuesEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialNoteChannelInput`<sup>Optional</sup> <a name="confidentialNoteChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannelInput"></a>

```typescript
public readonly confidentialNoteChannelInput: string;
```

- *Type:* string

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEventsInput"></a>

```typescript
public readonly confidentialNoteEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issueChannelInput`<sup>Optional</sup> <a name="issueChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannelInput"></a>

```typescript
public readonly issueChannelInput: string;
```

- *Type:* string

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEventsInput"></a>

```typescript
public readonly issuesEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestChannelInput`<sup>Optional</sup> <a name="mergeRequestChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannelInput"></a>

```typescript
public readonly mergeRequestChannelInput: string;
```

- *Type:* string

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEventsInput"></a>

```typescript
public readonly mergeRequestsEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noteChannelInput`<sup>Optional</sup> <a name="noteChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannelInput"></a>

```typescript
public readonly noteChannelInput: string;
```

- *Type:* string

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEventsInput"></a>

```typescript
public readonly noteEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```typescript
public readonly notifyOnlyBrokenPipelinesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipelineChannelInput`<sup>Optional</sup> <a name="pipelineChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannelInput"></a>

```typescript
public readonly pipelineChannelInput: string;
```

- *Type:* string

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEventsInput"></a>

```typescript
public readonly pipelineEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushChannelInput`<sup>Optional</sup> <a name="pushChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannelInput"></a>

```typescript
public readonly pushChannelInput: string;
```

- *Type:* string

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEventsInput"></a>

```typescript
public readonly pushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushChannelInput`<sup>Optional</sup> <a name="tagPushChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannelInput"></a>

```typescript
public readonly tagPushChannelInput: string;
```

- *Type:* string

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEventsInput"></a>

```typescript
public readonly tagPushEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `wikiPageChannelInput`<sup>Optional</sup> <a name="wikiPageChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannelInput"></a>

```typescript
public readonly wikiPageChannelInput: string;
```

- *Type:* string

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEventsInput"></a>

```typescript
public readonly wikiPageEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotified"></a>

```typescript
public readonly branchesToBeNotified: string;
```

- *Type:* string

---

##### `confidentialIssueChannel`<sup>Required</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannel"></a>

```typescript
public readonly confidentialIssueChannel: string;
```

- *Type:* string

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEvents"></a>

```typescript
public readonly confidentialIssuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialNoteChannel`<sup>Required</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannel"></a>

```typescript
public readonly confidentialNoteChannel: string;
```

- *Type:* string

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEvents"></a>

```typescript
public readonly confidentialNoteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issueChannel`<sup>Required</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannel"></a>

```typescript
public readonly issueChannel: string;
```

- *Type:* string

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEvents"></a>

```typescript
public readonly issuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestChannel`<sup>Required</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannel"></a>

```typescript
public readonly mergeRequestChannel: string;
```

- *Type:* string

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noteChannel`<sup>Required</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannel"></a>

```typescript
public readonly noteChannel: string;
```

- *Type:* string

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEvents"></a>

```typescript
public readonly noteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelines`<sup>Required</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```typescript
public readonly notifyOnlyBrokenPipelines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipelineChannel`<sup>Required</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEvents"></a>

```typescript
public readonly pipelineEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pushChannel`<sup>Required</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannel"></a>

```typescript
public readonly pushChannel: string;
```

- *Type:* string

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagPushChannel`<sup>Required</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannel"></a>

```typescript
public readonly tagPushChannel: string;
```

- *Type:* string

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `wikiPageChannel`<sup>Required</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannel"></a>

```typescript
public readonly wikiPageChannel: string;
```

- *Type:* string

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEvents"></a>

```typescript
public readonly wikiPageEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationMattermostConfig <a name="ProjectIntegrationMattermostConfig" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.Initializer"></a>

```typescript
import { projectIntegrationMattermost } from '@cdktf/provider-gitlab'

const projectIntegrationMattermostConfig: projectIntegrationMattermost.ProjectIntegrationMattermostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.project">project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.webhook">webhook</a></code> | <code>string</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssueChannel">confidentialIssueChannel</a></code> | <code>string</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteChannel">confidentialNoteChannel</a></code> | <code>string</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#id ProjectIntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issueChannel">issueChannel</a></code> | <code>string</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issuesEvents">issuesEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestChannel">mergeRequestChannel</a></code> | <code>string</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteChannel">noteChannel</a></code> | <code>string</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteEvents">noteEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>boolean \| cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushChannel">pushChannel</a></code> | <code>string</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushEvents">pushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushChannel">tagPushChannel</a></code> | <code>string</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.username">username</a></code> | <code>string</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageChannel">wikiPageChannel</a></code> | <code>string</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#project ProjectIntegrationMattermost#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#webhook ProjectIntegrationMattermost#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.branchesToBeNotified"></a>

```typescript
public readonly branchesToBeNotified: string;
```

- *Type:* string

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#branches_to_be_notified ProjectIntegrationMattermost#branches_to_be_notified}

---

##### `confidentialIssueChannel`<sup>Optional</sup> <a name="confidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```typescript
public readonly confidentialIssueChannel: string;
```

- *Type:* string

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#confidential_issue_channel ProjectIntegrationMattermost#confidential_issue_channel}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```typescript
public readonly confidentialIssuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#confidential_issues_events ProjectIntegrationMattermost#confidential_issues_events}

---

##### `confidentialNoteChannel`<sup>Optional</sup> <a name="confidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```typescript
public readonly confidentialNoteChannel: string;
```

- *Type:* string

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#confidential_note_channel ProjectIntegrationMattermost#confidential_note_channel}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```typescript
public readonly confidentialNoteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#confidential_note_events ProjectIntegrationMattermost#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#id ProjectIntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issueChannel`<sup>Optional</sup> <a name="issueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issueChannel"></a>

```typescript
public readonly issueChannel: string;
```

- *Type:* string

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#issue_channel ProjectIntegrationMattermost#issue_channel}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issuesEvents"></a>

```typescript
public readonly issuesEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#issues_events ProjectIntegrationMattermost#issues_events}

---

##### `mergeRequestChannel`<sup>Optional</sup> <a name="mergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestChannel"></a>

```typescript
public readonly mergeRequestChannel: string;
```

- *Type:* string

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#merge_request_channel ProjectIntegrationMattermost#merge_request_channel}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```typescript
public readonly mergeRequestsEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#merge_requests_events ProjectIntegrationMattermost#merge_requests_events}

---

##### `noteChannel`<sup>Optional</sup> <a name="noteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteChannel"></a>

```typescript
public readonly noteChannel: string;
```

- *Type:* string

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#note_channel ProjectIntegrationMattermost#note_channel}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteEvents"></a>

```typescript
public readonly noteEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#note_events ProjectIntegrationMattermost#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```typescript
public readonly notifyOnlyBrokenPipelines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#notify_only_broken_pipelines ProjectIntegrationMattermost#notify_only_broken_pipelines}

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#pipeline_channel ProjectIntegrationMattermost#pipeline_channel}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineEvents"></a>

```typescript
public readonly pipelineEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#pipeline_events ProjectIntegrationMattermost#pipeline_events}

---

##### `pushChannel`<sup>Optional</sup> <a name="pushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushChannel"></a>

```typescript
public readonly pushChannel: string;
```

- *Type:* string

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#push_channel ProjectIntegrationMattermost#push_channel}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushEvents"></a>

```typescript
public readonly pushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#push_events ProjectIntegrationMattermost#push_events}

---

##### `tagPushChannel`<sup>Optional</sup> <a name="tagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushChannel"></a>

```typescript
public readonly tagPushChannel: string;
```

- *Type:* string

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#tag_push_channel ProjectIntegrationMattermost#tag_push_channel}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushEvents"></a>

```typescript
public readonly tagPushEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#tag_push_events ProjectIntegrationMattermost#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#username ProjectIntegrationMattermost#username}

---

##### `wikiPageChannel`<sup>Optional</sup> <a name="wikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageChannel"></a>

```typescript
public readonly wikiPageChannel: string;
```

- *Type:* string

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#wiki_page_channel ProjectIntegrationMattermost#wiki_page_channel}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageEvents"></a>

```typescript
public readonly wikiPageEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_mattermost#wiki_page_events ProjectIntegrationMattermost#wiki_page_events}

---



